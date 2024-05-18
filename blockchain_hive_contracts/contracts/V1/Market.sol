// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.25;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import {IMarket} from "../Interfaces/IMarket.sol";
import {ICourse} from "../Interfaces/ICourse.sol";
import {Course} from "./Course.sol";

interface CustomErrors {
    error CourseIsAlreadyOwner(string message);
    error NotCourseOwner(string message);
    error CourseExpired(string message);
    error NotNFTHolder(string message);
    error InvalidCourseId(string message);
    error InvalidDuration(string message);
    error InvalidPrice(string message);
}

contract Market is
    Initializable,
    OwnableUpgradeable,
    UUPSUpgradeable,
    IMarket,
    CustomErrors
{
    Course public CourseNft;
    uint256 royaltyPercentage; // 1000 means 10% -> 1 means 0.01%

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(
        address initialOwner,
        address courseNftAddress,
        uint256 royaltyPerc
    ) public initializer {
        __Ownable_init(initialOwner);
        __UUPSUpgradeable_init();
        royaltyPercentage = royaltyPerc;
        CourseNft = Course(courseNftAddress);
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}

    function sellCourse(bytes memory courseId, uint256 price) public {
        ICourse.Course memory _course = CourseNft.getCourseDetails(courseId);
        require(compareBytes(courseId, _course.courseId), "Invalid courseId");
        require(_course.holder == msg.sender, "You don't hold this course");
        require(
            _course.duration + _course.startTime > block.timestamp,
            "You have completed the course duration"
        );
        require(_course.secondHolder == address(0), "Course already resold");

        _course.duration =
            _course.duration -
            (block.timestamp - _course.startTime);
        _course.price = price;
        _course.isListed = true;
        _course.pausedTime = block.timestamp;

        CourseNft.setCourseDetails(courseId, _course);
    }

    function removeFromMarket(bytes memory courseId) public {
        ICourse.Course memory _course = CourseNft.getCourseDetails(courseId);
        require(compareBytes(courseId, _course.courseId), "Invalid courseId");
        require(_course.holder == msg.sender, "You don't hold this course");
        require(_course.isListed == true, "Course is not listed");
        require(_course.pausedTime > 0, "Course is not paused");
        require(_course.secondHolder == address(0), "Course already resold");

        _course.isListed = false;
        _course.pausedTime = 0;
        _course.startTime = block.timestamp;

        CourseNft.setCourseDetails(courseId, _course);
    }

    // buy course from swapso
    function buyCourse(
        BuyCourseRequest calldata course,
        uint256 duration
    ) public payable {
        ICourse.Course memory _course = CourseNft.getCourseDetails(
            course.courseId
        );

        if (compareBytes(_course.courseId, "")) {
            _course.courseId = course.courseId;
            _course.id = course.details.id;
            _course.dbId = course.details.dbId;
            _course.price = course.details.price; // default price needs to be checked
            _course.recommendedDuration = course.details.recommendedDuration; // default value needs to check
        } else if (
            !compareBytes(_course.courseId, "") && msg.sender == _course.holder
        ) {
            require(
                _course.id == course.details.id &&
                    _course.price == course.details.price &&
                    _course.recommendedDuration ==
                    course.details.recommendedDuration &&
                    compareBytes(
                        bytes(_course.dbId),
                        bytes(course.details.dbId)
                    ),
                "Course details cannot be changed"
            );
            require(
                msg.value == _course.price * (duration / 1 days),
                "Insufficient amount"
            );
            require(
                _course.isListed == false,
                "Course is listed for sale, you can't buy now."
            );
            require(
                _course.duration + _course.startTime < block.timestamp,
                "Course is still active, you can't buy now."
            );
//buyfromMarket
            _course.duration = duration;
            _course.startTime = block.timestamp;
            _course.isListed = false;
            _course.holder = msg.sender;

            CourseNft.setCourseDetails(course.courseId, _course);

            payable(CourseNft.owner()).transfer(msg.value);
            return;
        } else {
            revert CourseIsAlreadyOwner(
                "This course is already owned by another user"
            );
        }

        require(
            msg.value == _course.price * (duration / 1 days),
            "Insufficient amount"
        );

        if (CourseNft.balanceOf(owner(), course.details.id) > 0) {
            uint256[] memory ids = new uint256[](1);
            ids[0] = course.details.id;
            uint256[] memory values = new uint256[](1);
            values[0] = 1;
            CourseNft.updateFromMarket(address(0), owner(), ids, values);
        } else {
            CourseNft.mintFromMarket(owner(), course.details.id, 1, "");
        }

        _course.duration = duration;
        _course.startTime = block.timestamp;
        _course.isListed = false;
        _course.holder = msg.sender;
        _course.courseNumber = CourseNft.balanceOf(owner(), course.details.id);

        CourseNft.setCourseDetails(course.courseId, _course);
        CourseNft.addUserCourse(msg.sender, _course.courseId);

        CourseNft.setListOfCourses(_course.courseId);
        payable(CourseNft.owner()).transfer(msg.value);
    }

    function buyFromMarket(bytes memory courseId) public payable {
        ICourse.Course memory _course = CourseNft.getCourseDetails(courseId);

        require(compareBytes(courseId, _course.courseId), "Invalid courseId");
        require(_course.isListed == true, "Course not listed on marketplace");
        require(
            _course.pausedTime > 0 && _course.pausedTime < block.timestamp,
            "Course is not listed"
        );
        require(_course.secondHolder == address(0), "Course already sold");

        require(
            msg.value == (_course.duration / 1 days) * _course.price,
            "Insufficient amount"
        );

        _course.startTime = block.timestamp;
        _course.pausedTime = 0;
        _course.isListed = false;
        _course.secondHolder = msg.sender;

        CourseNft.setCourseDetails(courseId, _course);
        CourseNft.addUserCourse(msg.sender, courseId);

        payable(_course.holder).transfer(
            (msg.value * royaltyPercentage) / 10000
        );
        payable(CourseNft.owner()).transfer(
            (msg.value * (10000 - royaltyPercentage)) / 10000
        );
    }

    function compareBytes(
        bytes memory a,
        bytes memory b
    ) internal pure returns (bool) {
        return keccak256(a) == keccak256(b);
    }

    function setRoyaltyPercentage(uint256 _royalty) public onlyOwner {
        require(_royalty < 5000, "Royalty cannot be more than 50%");
        royaltyPercentage = _royalty;
    }

    function getRoyaltyPercentage() public view returns (uint256) {
        return royaltyPercentage;
    }
}

// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.16;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {ICourseSell} from "../Interfaces/ICourseSell.sol";

contract CourseSell is ERC721URIStorage, ICourseSell {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address public owner;
    address public swapTokenAddress;
    string private baseURI;

    constructor(
        address _swapTokenAddress,
        string memory _baseURI
    ) ERC721("SWAPSO", "SSO") {
        owner = msg.sender;
        swapTokenAddress = _swapTokenAddress;
        baseURI = _baseURI;
    }

    mapping(uint => Course) public courses;
    mapping(address => uint256[]) public userCourses;
    uint private _courseId;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function sellCourse(uint _cId, uint _price) external returns (bool) {
        Course storage _course = courses[_cId];
        require(
            _course.holder == msg.sender,
            "you are not Owner of this Course"
        );

        require(_course.duration < block.timestamp, "Course is Expire");
        uint startTime = _course.startTime;
        uint duration = _course.duration;
        uint remainingTime = duration - (block.timestamp - startTime);
        uint newCourseDuration = remainingTime;
        _course.duration = newCourseDuration;

        require(
            ownerOf(_course.nftId) == msg.sender,
            "You are not the owner of this NFT"
        );
        _safeTransfer(msg.sender, owner, _course.nftId, "");
        _course.holder = address(0);
        _course.startTime = 0;
        _course.isListed = true;
        _course.reSell = true;
        _course.price = _price;
        _removeCourseFromUser(msg.sender, _cId);
        return true;
    }

    function buyCourse(uint _cId) external returns (uint) {
        require(_cId < _courseId, "Invalid course ID");
        Course storage _course = courses[_cId];

        if (_course.reSell) {
            uint amount = _course.price;
            require(
                IERC20(swapTokenAddress).transferFrom(
                    msg.sender,
                    address(this),
                    amount
                ),
                "Transfer failed"
            );
            _course.holder = msg.sender;
            _course.startTime = block.timestamp;
            _course.isListed = false;
            _safeTransfer(owner, msg.sender, _course.nftId, "");
            return _course.nftId;
        } else {
            require(
                _course.holder == address(0),
                "Course is already sold and it is not available on Marketplace"
            );
            uint amount = _course.price;
            _course.startTime = block.timestamp;
            _course.holder = msg.sender;
            require(
                IERC20(swapTokenAddress).transferFrom(
                    msg.sender,
                    address(this),
                    amount
                ),
                "Transfer failed"
            );

            // Mint Course NFT
            _tokenIds.increment();
            uint256 newItemId = _tokenIds.current();
            _safeMint(msg.sender, newItemId);
            _setTokenURI(
                newItemId,
                string(abi.encodePacked(baseURI, "/course.json"))
            );
            _course.nftId = newItemId;
            _course.isListed = false;
            userCourses[msg.sender].push(_cId);
            return newItemId;
        }
    }

    function addCourse(
        uint _price,
        uint _duration
    ) external onlyOwner returns (bool) {
        require(_price > 0, "Price must be greater than 0");
        require(_duration > 0, "Duration must be greater than 0");
        Course storage newCourse = courses[_courseId];
        newCourse.id = _courseId;
        newCourse.holder = address(0);
        newCourse.price = _price;
        newCourse.duration = _duration;
        newCourse.startTime = 0;
        newCourse.isListed = true;
        newCourse.reSell = false;
        unchecked {
            ++_courseId;
        }

        return true;
    }

    function _removeCourseFromUser(address _user, uint256 _cid) private {
        uint256[] storage _courses = userCourses[_user];
        for (uint256 i = 0; i < _courses.length; i++) {
            if (_courses[i] == _cid) {
                _courses[i] = _courses[_courses.length - 1];
                _courses.pop();
                break;
            }
        }
    }
}


// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.25;

import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/ERC1155URIStorageUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/extensions/ERC1155SupplyUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import {Market} from "./Market.sol";
import {ICourse} from "../Interfaces/ICourse.sol";

contract Course is
    Initializable,
    ERC1155Upgradeable,
    ERC1155URIStorageUpgradeable,
    ERC1155SupplyUpgradeable,
    OwnableUpgradeable,
    UUPSUpgradeable,
    ICourse
{
    string private baseURI;
    Market public Marketplace;

    mapping(bytes => Course) public courses;
    mapping(address => bytes[]) public userCourses;

    mapping(uint256 => bool) public allowNftTransfer;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(
        address initialOwner,
        string memory _baseURI
    ) public initializer {
        __ERC1155_init(_baseURI);
        __ERC1155URIStorage_init();
        __Ownable_init(initialOwner);
        __ERC1155Supply_init();
        __UUPSUpgradeable_init();

        baseURI = _baseURI;
    }

    modifier onlyMarket() {
        require(
            msg.sender == address(Marketplace),
            "You are not authorized to update NFT"
        );
        _;
    }

    modifier isTransferAllowed(uint256 courseId) {
        require(
            allowNftTransfer[courseId],
            "Course ownership transfer is not allowed"
        );
        _;
    }

    function setMarketplaceContract(address contractAddress) public onlyOwner {
        Marketplace = Market(contractAddress);
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function uri(
        uint256 id
    )
        public
        view
        override(ERC1155URIStorageUpgradeable, ERC1155Upgradeable)
        returns (string memory tokenUri)
    {
        string memory _uri = super.uri(id);
        return _uri;
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}

    function _update(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory values
    ) internal override(ERC1155Upgradeable, ERC1155SupplyUpgradeable) {
        super._update(from, to, ids, values);
    }

    function updateFromMarket(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory values
    ) public onlyMarket {
        _update(from, to, ids, values);
    }

    function mintFromMarket(
        address to,
        uint256 id,
        uint256 value,
        bytes memory data
    ) public onlyMarket {
        _mint(to, id, value, data);
    }

    function getCourseDetails(
        bytes memory _id
    ) public view returns(Course memory) {
        Course memory data = courses[_id];
        return data;
    }

    function setCourseDetails(
        bytes memory _id,
        Course memory course
    ) public onlyMarket {
        require(
            compareBytes(_id, course.courseId),
            "Cannot change the complete course"
        );

        courses[_id] = course;
    }

    function getUserCourse(
        address _user
    ) public view returns (bytes[] memory) {
        return userCourses[_user];
    }

    function addUserCourse(
        address _user,
        bytes memory _courses
    ) public onlyMarket {
        userCourses[_user].push(_courses);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 value,
        bytes memory data
    ) public override(ERC1155Upgradeable) isTransferAllowed(id) {
        super.safeTransferFrom(from, to, id, value, data);
        allowNftTransfer[id] = false;
    }

    function setAllowTransfer(uint256 id) public {
        require(balanceOf(msg.sender, id) > 0, "You don't own this NFT");
        allowNftTransfer[id] = true;
    }

    function compareBytes(
        bytes memory a,
        bytes memory b
    ) internal pure returns (bool) {
        return keccak256(a) == keccak256(b);
    }
}

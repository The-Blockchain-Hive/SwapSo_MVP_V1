// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.16;

interface ICourseSell {
    struct Course {
        uint id;
        address holder;
        uint price;
        uint duration;
        uint startTime;
        uint nftId;
        bool isListed;
        bool reSell;
    }

    /**
     * @dev Sell the course on same marketplace
     * @param _cId Id of the course to sell
     * @param _price Price of the course
     */
    function sellCourse(uint256 _cId , uint _price) external returns (bool);

    /**
     * @dev Buy the course from the marketplace
     * @param _cId Id of the course to buy
     */

    function buyCourse(uint256 _cId) external returns (uint);

    /**
    * @dev Add a new course to the marketplace
    * @param _price Price of the course
    */
    function addCourse(uint _price, uint _duration) external returns (bool);
}

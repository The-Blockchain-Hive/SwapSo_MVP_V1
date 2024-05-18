// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.25;

interface IMarket {
    struct BuyCourseRequest {
        bytes courseId; // The unique identifier of the course.
        CourseDetails details; // The arguments of the course details.
    }

    struct CourseDetails {
        uint256 id;
        string dbId;
        uint256 price;
        uint256 recommendedDuration;
    }

    /**
     * @dev Sell the course on the marketplace
     * @param courseId Id of the course to sell
     * @param price Price of the course
     */
    function sellCourse(bytes memory courseId, uint256 price) external;

    /**
     * @dev Remove the course on the marketplace
     * @param courseId Id of the course to sell
     */
    function removeFromMarket(bytes memory courseId) external;

    /**
     * @dev Buy the course from SwapSo
     * @param course BuyCourseRequest object for course details to mint new course
     * @param duration Duration for which the user wants to buy the course
     */

    function buyCourse(
        BuyCourseRequest calldata course,
        uint256 duration
    ) external payable;

    /**
     * @dev Buy course from marketplace in the listed price
     * @param courseId Course Id
     */
    function buyFromMarket(bytes memory courseId) external payable;
}

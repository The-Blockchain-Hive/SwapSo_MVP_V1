// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.25;

interface ICourse {
    struct Course {
        bytes courseId;
        uint256 id;
        string dbId;
        uint256 courseNumber;
        uint256 price; // 23
        uint256 duration; // 30, 15
        uint256 recommendedDuration; // 40
        uint256 startTime; // 0, 20
        uint256 pausedTime; // 15, 0
        bool isListed; // true, false
        address holder;
        address secondHolder; // 0x0, 0x1234
    }
}

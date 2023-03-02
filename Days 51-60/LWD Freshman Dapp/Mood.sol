// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract MoodDiary{
    string mood;
    //writes  mood to smart contract
    function setMood(string memory _mood) public {
        mood = _mood;
    }
    //reads the mood from the smart contract
    function getMood() public view returns(string memory){
        return mood;
    }

}


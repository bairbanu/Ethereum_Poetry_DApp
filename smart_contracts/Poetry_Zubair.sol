pragma solidity ^0.4.19;

contract Poetry_Zubair {
    mapping (uint => string) poems;
    uint poemCounter;

    function Poetry_Zubair() public {
        poemCounter = 0;
    }

    function setPoem(string poem) public {
        poems[poemCounter] = poem;
        poemCounter++;
    }

    function getPoem(uint number) public constant returns (string) {
        return poems[number];
    }
}

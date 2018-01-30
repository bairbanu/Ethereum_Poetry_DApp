pragma solidity ^0.4.19;

/*
  Contract Address: 0xd9cfed2e33b484201677a40fe6ffc497424da931
~
  Contract ABI: [ { "constant": true, "inputs": [ { "name": "number", "type": "uint256" } ], "name": "getPoem", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "number", "type": "uint256" }, { "name": "newPoem", "type": "string" } ], "name": "editPoem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "poem", "type": "string" } ], "name": "setPoem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" } ]
*/

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

    function editPoem(uint number, string newPoem) public {
        poems[number] = newPoem;
    }
}

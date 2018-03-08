pragma solidity ^0.4.11;

contract SimpleStorage {
    uint data;
    
    function setData(uint x) {
        data = x;
    }
    
    function getData() constant public returns (uint) {
        return data;
    }
}
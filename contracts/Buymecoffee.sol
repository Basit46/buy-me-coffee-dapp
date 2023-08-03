// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Buymecoffee{
    address payable owner;
    struct detail{
        uint id;
        address senderAddress;
        string senderName;
        uint amountSent;
        uint timestamp;
    }
    uint count = 0;

    detail[] senders;

    constructor(){
        owner = payable(msg.sender);
    }

    function buy(string calldata _name) public payable {
        require(msg.value > 0 , "Coffee amount should be moe than 0 egbon");

        count ++;
        owner.transfer(msg.value);
        detail memory newSender = detail(count, msg.sender, _name, msg.value, block.timestamp);
        senders.push(newSender);
    }

    function getSenders() public view returns(detail[] memory){
        return senders;
    }
}
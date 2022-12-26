// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Transactions {
    event Transfer(
        address sender,
        address receiver,
        uint amount,
        string message,
        uint timestamp,
        string keyword
    );

    function publishTransaction(
        address receiver,
        uint amount,
        string memory message,
        string memory keyword
    ) external {
        emit Transfer(
            msg.sender,
            receiver,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }
}

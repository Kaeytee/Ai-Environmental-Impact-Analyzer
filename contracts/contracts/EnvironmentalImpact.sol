// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract EnvironmentalImpact is Ownable {
    struct Report {
        address user;
        uint256 score;
        string ipfsHash;
    }

    mapping(string => Report) public productReports;
    
    event ReportStored(string productId, address indexed user, string ipfsHash);

    constructor() Ownable(msg.sender) {}

    function storeReport(
        string memory productId,
        uint256 score,
        string memory ipfsHash
    ) external {
        productReports[productId] = Report(msg.sender, score, ipfsHash);
        emit ReportStored(productId, msg.sender, ipfsHash);
    }

    function getReport(string memory productId) external view returns (Report memory) {
        return productReports[productId];
    }
}
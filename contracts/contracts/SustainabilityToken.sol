// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SustainabilityToken is ERC20 {
    constructor() ERC20("SustainabilityToken", "SUS") {
        _mint(msg.sender, 1_000_000 * 10 ** decimals());
    }

    function rewardUser(address user, uint256 amount) external {
        _mint(user, amount);
    }
}
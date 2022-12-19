pragma solidity ^0.8.0;

contract ERC20 {
    string public name = "ERC20Basic";
    string public symbol = "DAI";
    uint8 public decimals = 18;

    event Approval(
        address indexed tokenOwner,
        address indexed spender,
        uint256 tokens
    );
    event Transfer(address indexed from, address indexed to, uint256 tokens);

    mapping(address => uint256) balances;

    mapping(address => mapping(address => uint256)) allowed;

    uint256 totalSupply_;

    using SafeMaths for uint256;

    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 total
    ) public {
        totalSupply_ = total;
        balances[msg.sender] = totalSupply_;
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
    }

    function totalSupply() public view returns (uint256) {
        return totalSupply_;
    }

    function balanceOf(address tokenOwner) public view returns (uint256) {
        return balances[tokenOwner];
    }

    function transfer(
        address receiver,
        uint256 numTokens
    ) public returns (bool) {
        require(numTokens <= balances[msg.sender]);
        balances[msg.sender] = balances[msg.sender].sub(numTokens);
        balances[receiver] = balances[receiver].add(numTokens);
        emit Transfer(msg.sender, receiver, numTokens);
        return true;
    }

    function approve(
        address delegate,
        uint256 numTokens
    ) public returns (bool) {
        allowed[msg.sender][delegate] = numTokens;
        emit Approval(msg.sender, delegate, numTokens);
        return true;
    }

    function allowance(
        address owner,
        address delegate
    ) public view returns (uint256) {
        return allowed[owner][delegate];
    }

    function transferFrom(
        address owner,
        address buyer,
        uint256 numTokens
    ) public returns (bool) {
        require(numTokens <= balances[owner]);
        require(numTokens <= allowed[owner][msg.sender]);

        balances[owner] = balances[owner].sub(numTokens);
        allowed[owner][msg.sender] = allowed[owner][msg.sender].sub(numTokens);
        balances[buyer] = balances[buyer].add(numTokens);
        emit Transfer(owner, buyer, numTokens);
        return true;
    }

    function mint(address to, uint256 numTokens) public {
        balances[to] += numTokens;
        totalSupply_ += numTokens;
    }

    function mint100(address to) public {
        balances[to] += 100 ** this.decimals();
        totalSupply_ += 100 ** this.decimals();
    }
}

library SafeMaths {
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b <= a);
        return a - b;
    }

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        assert(c >= a);
        return c;
    }
}
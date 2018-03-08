const Web3 = require('web3');
const ganache_cli = require('ganache-cli');
const web3 = new Web3(ganache_cli.provider());


// 获取当前节点所有账号
web3.eth.getAccounts().then(accounts => {
    console.log(accounts);
    // 获取账户余额
    web3.eth.getBalance(accounts[0]).then(result => {
        console.log(web3.utils.fromWei(result, 'ether'));
    })
});

web3.eth.getBlockNumber().then(number => {
    console.log('block:' + number);
})


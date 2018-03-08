const Web3 = require('web3');
const ganache_cli = require('ganache-cli');

const web3 = new Web3(ganache_cli.provider());

web3.eth.getAccounts().then(console.log);
// console.log(web3.eth.get);
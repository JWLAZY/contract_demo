const fs = require('fs');
const path = require('path')
const Web3 = require('web3');
const ganache_cli = require('ganache-cli');
const web3 = new Web3(ganache_cli.provider());

const filepath = path.resolve(__dirname,'build','SimpleStorage.json')
let contractabi = JSON.parse(fs.readFileSync(filepath, 'utf8'));
let deply = () => {
    let contract = new web3.eth.Contract(JSON.parse(contractabi.interface));
    web3.eth.getAccounts()
    .then(accounts => {
        contract.deploy({
            data: contractabi.bytecode
        })
        .send({
            from: accounts[0],
            gas: 1500000,
            gasPrice: '30000000000000'
        })
        .then(d => {
            if(d.options.address){
                console.log("模拟部署智能合约成功,合约地址:" + d.options.address);
            }
        })
    });
}

deply();

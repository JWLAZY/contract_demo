const solc = require('solc');
const fs = require('fs');
const path = require('path')

// 获取智能合约文件
const solfile = path.resolve(__dirname, './Solidity/SimpleStorage.sol');
// 读取智能合约
const source = fs.readFileSync(solfile, 'utf8');
// 编译智能合约
const compiledContract = solc.compile(source, 1);

// 生成目标路径
const buildPath = path.resolve(__dirname,'build');
for(let contract in compiledContract.contracts){
    const filePath = path.resolve(buildPath,contract.replace(':','') + '.json')
    // 写入目标文件夹
    fs.writeFileSync(filePath, JSON.stringify(compiledContract.contracts[contract],null,4))
}

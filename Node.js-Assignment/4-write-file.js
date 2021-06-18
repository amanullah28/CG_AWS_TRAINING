const fs = require('fs');
const {promisify} = require('util');
const writeFile = promisify(fs.appendFile);
const path = require('path');
// console.log(process.argv);
const writeTo = path.join(__dirname, '4-output.txt');
// console.log(writeTo);
async function writeData() {
    try {
        const data = process.argv[2];
        console.log(data)
        await writeFile(writeTo, data);  
        // console.log(data);
    } catch(err) {
        console.log(err);
    }
}

writeData();
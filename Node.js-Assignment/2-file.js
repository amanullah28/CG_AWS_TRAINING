const fs = require('fs');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);
const path = require('path');
// console.log(process.argv[2]);
const readFrom = path.join(__dirname, process.argv[2]);
// console.log(readFrom);
async function readDataFromText() {
    try {
        const data = await readFile(readFrom, 'utf8');
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}

readDataFromText();
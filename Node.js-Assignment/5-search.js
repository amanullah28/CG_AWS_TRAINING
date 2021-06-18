const fs = require('fs');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);
const path = require('path');
// console.log(process.argv[2]);
const readFrom = path.join(__dirname, '5-search.txt');
// console.log(readFrom);
async function readDataFromText() {
    try {
        const searchTerm = process.argv[2];
        const data = await readFile(readFrom, 'utf8');
        // console.log(data.split(" "));
        const occuranceCount =  data.split(" ").filter(item=>{
            return item===searchTerm
        }).length
        console.log(occuranceCount);

    } catch(err) {
        console.log(err);
    }
}

readDataFromText()
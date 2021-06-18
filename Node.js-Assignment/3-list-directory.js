const fs = require('fs');
const {promisify} = require('util');
const path = require('path');
const readDirectory = promisify(fs.readdir);
const readFrom = path.resolve(__dirname, '..');
const glob = require('glob');
console.log(readFrom);

glob(readFrom, function(err, files) {
    if(err) {
        console.log(err);
        return
    }
    console.log(files);
})

// async function readDir() {
//     try {
//         const data = await readDirectory(readFrom, 'utf8');
//         console.log(data);
//     } catch(err) { 
//         console.log(err);
//     }
// }

// readDir();
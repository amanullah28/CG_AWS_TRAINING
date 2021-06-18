const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);
const PORT = process.argv[2];
const readFrom = path.join(__dirname, process.argv[3]);
app.get("/books", async(req, res, next)=>{
    let result = await readFile(readFrom, 'utf8');
    console.log(result);
    // res.sttjson({
    //     data: result
    // })
    res.status(200).json({
        message: 'Data fetched!!',
        data: result
    });
    // console.log("Hello world");
    // res.send('<p>Hello world!!</p>');
})

app.listen(PORT, ()=>{
    console.log(`Server has started at port ${PORT}`);
})
const { prototype } = require('events');
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || process.env.PORT_ENV;
console.log(PORT);
// console.log(app.get(PORT))

app.get("/", (req, res, next)=>[
    res.send("<p>Hello world!!</p>")
]);

app.get("/time", (req, res, next)=>{
    const isoDate = new Date().toISOString();
    res.send(`<p>${isoDate}</p>`)
});

app.listen(PORT, ()=>{
    console.log(`Listning on PORT ${PORT}`);
});
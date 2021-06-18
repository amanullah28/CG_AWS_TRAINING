const express = require('express');
const app = express();
const PORT = 3000;
app.all("/", (req, res, next)=>{
    console.log("Hello world");
    res.send('<p>Hello world!!</p>');
})

app.listen(PORT, ()=>{
    console.log(`Server has started at port ${PORT}`);
})
const express = require('express');
const app = express();
const PORT = process.argv[2];

app.get("/home", (req, res, next)=>{
    const outputStr = "Hello World!!"
    console.log(outputStr);
    res.send(`<p>${outputStr}</p>`);
});

app.listen(PORT, ()=>{
    console.log(`Server has started at PORT ${PORT}`);
})
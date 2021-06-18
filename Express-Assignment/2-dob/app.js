const express = require('express');
const app = express();
const PORT = 3000;
app.get("/year", (req, res, next)=>{
    console.log(req.query);
    const date = new Date();
    date.setFullYear(date.getFullYear()-req.query.age);
    let outputStr = `You were born in ${date.getFullYear()}`
    console.log(outputStr);
    res.send(`<p>${outputStr}</p>`);
});

app.listen(PORT, ()=>{
    console.log(`Server has Started at Port ${PORT}`);
});
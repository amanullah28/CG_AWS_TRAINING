const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get("/", (req, res, next)=>{
    console.log("dfkjdf")
    res.send(`<form method="POST", action = "/form">
      <input type="text" name="formBody">
      <input type="submit" value="submit">
    </form>`)
});

app.post("/form", (req, res, next)=>{
    let inputStr = req.body.formBody;
    let reverseInput = inputStr.split("").reverse().join("");
    console.log(reverseInput)
    // console.log(inputStr);
    res.send(reverseInput);
});

app.listen(PORT, ()=>{
    console.log(`Listning on PORT ${PORT}`);
});
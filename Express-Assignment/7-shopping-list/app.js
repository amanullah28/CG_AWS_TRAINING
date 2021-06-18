const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

const productService = require('./productService');

productService.addProduct("jsd", "kdjf");
productService.addProduct("jsd", "kdjf");
// productService.getAllProduct(); 
// productService.deleteProduct(1);
// productService.updateProduct(2, "New Title", 100)
// productService.getAllProduct();
 

app.get("/items", (req, res, next)=>{
    try {
        const fetchedItem = productService.getAllProduct();
        res.send(fetchedItem);
    } catch (err) {
        console.log(err);
    }
});

app.post("/items", (req, res, next)=>{
    try {
        let title = req.body.title;
        let price = +req.body.price;
        console.log(req.body);
        let result = productService.addProduct(title, price);
        // console.log(result);
        res.status(200).send(result);
    } catch(err) {
        console.log(err);
    }
});

app.get("/items/:id", (req, res, next)=>{
    try {
        let idx = +req.params.id;
        // console.log(idx)
        const result = productService.getSingleProduct(idx);
        res.status(200).send(result);
    } catch(err) {
        console.log(err);
    }
});


app.patch("items/:id", (req, res, next)=>{
    try {
        let idx = +req.params.id;
        let {title, price} = req.body;
        console.log(req.body)
        let result = productService.updateProduct(idx, title, price);
        res.status(200).send(result);
    } catch(err) {
        console.log(err);
    }
})

app.delete("items/:id", (req, res, next)=>{
    try {
        let idx = +req.params.id;
        let result = productService.deleteProduct(idx);
        res.status(200).send(result);
    } catch(err) {
        console.log(err);
    }
})




app.listen(PORT, ()=>{
    console.log(`Listning on PORT ${PORT}`);
});
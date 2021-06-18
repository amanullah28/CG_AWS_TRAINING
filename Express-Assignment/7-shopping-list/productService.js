const responseGenerator = require('./util/responseGenerator');
const products = [];
class Product{
    constructor(title, price) {
        this.id = products.length===0? 1 : products[products.length-1].id+1;  
        this.title = title;
        this.price = price;
    }
}

function addProduct(title, price) {
    try {
        const newProduct = new Product(title, price);
        products.push(newProduct);
        return responseGenerator(200, "Product Added Successfully", newProduct.id)
    } catch(err) {
        console.log(err)
    }
}

function updateProduct(id, title, price) {
    try {
        const item = products.find(el=>el.id===id);
        if(!item) {
            throw new Error(`Item with  given Id ${id} Does'nt Exist!!`);
        }
        let newTitle = title || item.title;
        let newPrice = price || item.price;
        item.title = newTitle;
        item.price = newPrice;
        console.log(`Item with Id ${item.id} Successfully updated New Title is ${item.title} and new Price is ${item.price}`);
        return responseGenerator(200, "Product updated Successfully", item)
    } catch(err) {
        console.log(err);
    }
}

function deleteProduct(id) {
    try {
        let idx = products.findIndex(el=> el.id===id);
        let result = products.splice(idx,1);
        console.log(`Deleted Item = ${result}`);
        return responseGenerator(200, "Product Deleted Successfully", result)
    } catch(err) {
        console.log(err);
    }
}

function getSingleProduct(id) {
    try{
        console.log(id);
        let item = products.find(el=> el.id===id);
        if(!item) {
            throw new Error("No Item found with Provided Id");
        }
        console.log(item);
        return responseGenerator(200, "", item)
    } catch(err) {
        console.log(err);
    }
}

function getAllProduct() {
    try {
        console.log(products);
        return responseGenerator(200, "All Products", products)
    } catch(err) {
        console.log(err);
    }
}


module.exports = {
    addProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}
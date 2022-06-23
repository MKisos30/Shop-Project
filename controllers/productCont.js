const User = require('../models/userModel')
const Product = require('../models/productModel')

exports.showAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (error) {
        console.log(error)
        res.send({ok:false, massage: error})
    }
}

exports.addNewProduct = async (req, res) => {
    try {
        const {name, type, color, price, size} = req.body;
        // if (User.admin)
        const newProduct = new Product({name, type, color, price, size});
        await newProduct.save();
        res.send({ok:true, newProduct});
    } catch (error) {
        console.log(error)
        res.send({ok:false, massage: error})
    }
}

exports.removeProduct = async (req, res) => {
    try {
        const {id} = req.params;
        await Product.findByIdAndDelete(id);
        res.send({ok:true, massage: 'Product deleted'});
    } catch (error) {
        console.log(error)
        res.send({ok:false, massage: error})
    }
}

// exports.updateProduct = async (req, res) => {
//     try {

//     } catch (error) {
//         console.log(error)
//         res.send({ok:false, massage: error})
//     }
// }

exports.deleteAllProduct = async (req, res) => {
    try {
        const products = await Product.removeProduct();
        res.send(products)
    } catch (error) {
        console.log(error)
        res.send({ok:false, massage: error})
    }
}
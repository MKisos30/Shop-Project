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


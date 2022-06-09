const { Schema, model } = require('mongoose');

const ProductModel = new Schema({
    nameOfProduct: {
        type: String,
        required: [true, 'Product must have a name']
    },
    typeOfProduct: {
        type: String,
        required: [true, 'Product must have a type']
    },
    color: {
        type: String,
        required: [true, 'Product must have a color']
    },
    price: {
        type: Number,
        required: [true, 'Product must have a price']
    },
    size: {
        type: Number,
        required: [true, 'Product must have a size']
    }
})

model.exports = model('Product', ProductModel)
const { Router } = require('express');
const router = Router();
const {
showAllProduct,
addNewProduct,
removeProduct
} = require('../controllers/productCont');

router
.get('/showproducts', showAllProduct)
.post('/addproduct', addNewProduct)
.delete('/deleteproduct', removeProduct)



module.exports = router;
const { Router } = require('express');
const router = Router();
const {
showAllProduct,
addNewProduct,
removeProduct,
deleteAllProduct
} = require('../controllers/productCont');

router
.get('/showproducts', showAllProduct)
.post('/addproduct', addNewProduct)
.delete('/deleteproduct', removeProduct)
.delete('/deleteAll', deleteAllProduct)



module.exports = router;
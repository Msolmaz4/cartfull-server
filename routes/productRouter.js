const { getAllProducts ,getOneProduct,addOneProduct ,updateOneProduct,deleteOneProduct} = require('../controlles/productController');

const router =require('express').Router();


router
   .get('/',getAllProducts)

router
 .get('/product/:id',getOneProduct)
 .post('/product' ,addOneProduct)
 .patch('/product/:id',updateOneProduct)
 .delete('/product/:id',deleteOneProduct)   

module.exports = router
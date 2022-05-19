const { getAllProducts ,getOneProduct,addOneProduct } = require('../controlles/productController');

const router =require('express').Router();


router
   .get('/',getAllProducts)

router
 .get('/product/:id',getOneProduct)
 .post('/product' ,addOneProduct)
   //.patch('/product/:id')
   //.delete('/product/:id')   

module.exports = router
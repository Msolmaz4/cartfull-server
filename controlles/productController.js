const Product = require("../models/products")

exports.getAllProducts = async (req,res) =>{
    try{
       const allProducts = await Product.find({})
       res.status(200).json({
           data:allProducts,
           message:'succes'
       });
    }catch(err){
        console.log(err)
    }


}
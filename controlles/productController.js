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

exports.getOneProduct = async (req,res) =>{
    try{
        const { id} =req.params;
        if(!id) res.status(400).send('invalid input')
        const product =await Product.findById(id);
        res.status(200).send({data : product ,message :'succes'})
    }catch(err){
        console.log(err)
    }

}

exports.addOneProduct = async (req,res) =>{
    try{
        const {name,price,category} = req.body;
        if(name && price && category){
            const newProduct = await new Product({name:name,price:price,category:category});
            newProduct.save();
        }else{
            res.status(400).send('invalid input')
        }

    }catch(err){
        res.send(err.message)
        console.log(err)

    }

}
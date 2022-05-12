const mongoose =require('mongoose')


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:75
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    category:{
        type:String,
        required:true,
        enum:['fruit','vege','dairy'],
        lowercase:true
    }
})

const Product = mongoose.model('Product',productSchema )

module.exports =Product;
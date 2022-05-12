const mongoose = require('mongoose')

const Product = require('./models/products')


const connectFunction =()=>{
    mongoose.connect('mongodb://localhost:27017/productApp')
    .then(()=>console.log('connect db'))
    .catch(err =>console.log(errr))
}


connectFunction();
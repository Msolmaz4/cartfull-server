const mongoose = require('mongoose')

const Product = require('./models/products')


const connectFunction =()=>{
    mongoose.connect('mongodb://localhost:27017/productApp')
    .then(()=>console.log('connect db'))
    .catch((err) =>console.log(errr))
}


connectFunction();

Product.insertMany([
    {
        name:'alex',
        price:25,
        category:'fruit',
        id:Math.ceil(Math.random()*500)
    },
    {
        name:'Organic',
        price:2,
        category:'vega',
        id:Math.ceil(Math.random()*500)
    },
    {
        name:'Orange',
        price:6,
        category:'fruit',
        id:Math.ceil(Math.random()*500)
    },
    {
        name:'cholate',
        price:8,
        category:'fruit',
        id:Math.ceil(Math.random()*500)
    },
    {
        name:'clery',
        price:25,
        category:'fruit',
        id:Math.ceil(Math.random()*500)
    }

]).then(()=>console.log('insert succed'))
  .catch((err)=>console.log(err))
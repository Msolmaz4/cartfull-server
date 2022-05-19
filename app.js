const express = require('express')
const app = express();
const productRouter = require('./routes/productRouter')


//connection with db
require('./db/db')

//parsing the body of the request
app.use(express.urlencoded({ extended :false}))
app.use(express.json())



console.log('ilk middlerwa')
// product end point
app.use('*',(req,res,next)=>{
    console.log(req.originalUrl)
    if(!req.originalUrl.includes('/products')){
        return res.status(404).send('not found')
        next()
    }
    
})

console.log(('ilk gecti'))
//import routes
app.use('/products',productRouter)

console.log('ilk ruter')
app.use('*',(req,res,next)=>{
    res.status(404).send('not found server')

})


module.exports = app;
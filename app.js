const express = require('express')
const app = express();


//connection with db
require('./db/db')

//parsing the body of the request
app.use(express.urlencoded({ extended :false}))
app.use(express.json())


// product end point
app.use('*',(req,res,next)=>{
    if(!req.originalUrl.includes('/products')){
        return res.status(404).send('not found')
        next()
    }
    
})



app.use('/products',productRouter)

app.use('*',(req,res,next)=>{
    res.status(404).send('not found server')

}


module.exports = app;
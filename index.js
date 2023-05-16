const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())


// home route
 app.get('/', (req, res)=>{
    res.send('jhon is busy shopping')
 })

 app.listen(port, ()=>{
    console.log(`ema jhon is running ion post ${port}`);
 })

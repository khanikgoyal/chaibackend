// console.log("chai aur code");
require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req,res)=>{
    res.send('hello world!')
})
app.get('/twitter', (req,res)=>{
    res.send('hello khanik!')
})
app.get('/login' ,(req, res)=>{
    res.send('loging')
})
app.get('/youtube',(req,res)=>{
    res.send('chai aur code')
})
app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`);
})

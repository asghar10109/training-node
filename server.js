const express = require('express')
const cors = require('cors')
const app = express()
const dbs = require('./Database/db')
const userroute= require('./Routes/users');

app.use(express.json());
app.use(cors());
app.use('/users' , userroute)

{ dbs() }

const Port = 3000



app.listen(  Port,  ()=>{
    console.log(`your server is runing  on port : ${Port} `)
})
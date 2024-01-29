require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/routes')

// db connection
require('./connections/db')
const ecartApp=express()

ecartApp.use(cors())
ecartApp.use(express.json())
ecartApp.use(router)

const port=3001 || process.env.port
ecartApp.listen(port,()=>{
    console.log(`___Ecart Server Started At Port ${port}`);
})
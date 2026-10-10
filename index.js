const express = require("express");
const router = require("./routes/product");
const ConnectDb = require("./config/db");
require("dotenv").config()
const dns=require("node:dns")
const app =express();


dns.setServers(['1.1.1.1','8.8.8.8'])


app.use("/product",router)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/uploads",express.static("uploads"))
ConnectDb()
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log("Server Is Running PORT NUMBER 3000")
})
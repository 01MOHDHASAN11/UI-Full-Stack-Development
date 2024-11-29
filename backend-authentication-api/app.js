require("dotenv").config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const authRoutes=require("./routes/authRoutes")
app.use(bodyParser.json())


mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Connected to MongoDB")).catch(()=>console.log("Failed to connect"))

app.use("/auth",authRoutes)
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

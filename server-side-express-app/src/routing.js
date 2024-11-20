const express=require("express")
const app=express()

app.get('/',(req,res)=>{
    res.send('Hello Home')
    res.end()
})
app.get('/about',(req,res)=>{
    res.send('Hello about')
    res.end()
})

app.get('/contact',(req,res)=>{
    res.send('Hello contact')
    res.end()
})

app.get('*',(req,res)=>{
    res.send("404 page not found")
    res.end()
})



app.listen(4000)
console.log(`Server running on port 127.0.0.1:4000`)
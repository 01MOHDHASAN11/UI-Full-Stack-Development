const http=require("http")
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'})
    res.end(JSON.stringify([{Name:'TV',Price:23000},{Name:'Mobile',Price:13000}]))
}).listen(4000)
console.log(`Server is running at port number 4000`)
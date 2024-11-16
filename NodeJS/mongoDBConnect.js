var mongoClient = require("mongodb").MongoClient;
var http = require("http");
const url="mongodb://127.0.0.1:27017"
http.createServer((req, res)=>{
    res.writeHead(200,{'content-type':'application/json'})
    mongoClient.connect(url).then((result)=>{
        var db=result.db("DemoDB")
        db.collection("productsData").find({}).toArray().then((document)=>{
            res.end(JSON.stringify(document))
        })
    }).catch((err)=>{
        console.log(err);
    })
}).listen(7000);
console.log(`Server Started http://127.0.0.1:7000`);
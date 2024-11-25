const express=require('express')
const mongoClient=require('mongodb').MongoClient
const cors=require('cors')
const app=express()
const connectionString="mongodb://127.0.0.1:27017"
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const mydb='DemoDB'
const myCollectionName='productsData'
app.get('/products',(req,res)=>{
    mongoClient.connect(connectionString).then(clientObj=>{
        const db=clientObj.db(mydb)
        db.collection(myCollectionName).find({}).toArray().then(productdata=>{
            res.send(productdata)
            res.end()
        })
    })
})

app.get('/single-product/:id',(req,res)=>{
    mongoClient.connect(connectionString).then(data=>{
        const db=data.db(mydb)
        db.collection(myCollectionName).findOne({id:parseInt(req.params.id)}).then(singleData=>{
            res.send(singleData)
            res.end()
        })
    })
})

app.post('/add-product',(req,res)=>{
    mongoClient.connect(connectionString).then(clientObj=>{
        const db=clientObj.db(mydb)
        let rate = req.body.rating?.rate;
        if (isNaN(rate)) {
            return res.status(400).send({ message: "Invalid rating rate" });
        }
        const product = {
            id:req.body.id,
            title:req.body.title,
            price:parseInt(req.body.price),
            description:req.body.description,
            category:req.body.category,
            image:req.body.image,
            rating:{
                rate:parseFloat(req.body.rating.rate),
                price:parseInt(req.body.rating.price)
            }
        }
        db.collection(myCollectionName).insertOne(product).then(addData=>{
            res.send(addData)
            console.log("New product added successfully")
            res.end()
        }).catch(err=>{
            res.status(500).send({message:"Error adding product",error:err})
        })
    }).catch(err=>{
        res.status(500).send({message:"Error connecting to database",error:err})
    })
})

app.delete('/delete-product/:id',(req,res)=>{
    mongoClient.connect(connectionString).then(clientObj=>{
        const db=clientObj.db(mydb)
        db.collection(myCollectionName).deleteOne({id:parseInt(req.params.id)}).then(deleteData=>{
            res.send(deleteData)
            console.log("product deleted successfully")
            res.end()
        }).catch(err=>{
            res.status(500).send({message:"Error deleting product",error:err})
            res.end()
        })
    }).catch(err=>{
        res.status(500).send({message:"Error connecting to database",error:err})
    })
})

app.put('/update-product',(req,res)=>{
    mongoClient.connect(connectionString).then(clientObj=>{
        const db=clientObj.db(mydb)
        db.collection(myCollectionName).updateOne({id:parseInt(req.body.id)},{$set:{'rating.rate':req.body.rating.rate}}).then(updateProduct=>{
            res.status(200).send({message:"product details updated successfully",updateProduct:updateProduct})
        }).catch(err=>{
            res.status(500).send({message:"product detail failed to update",error:err})
        })
    }).catch(err=>{
        res.status(500).send({message:"Error connecting to database",error:err})
    })
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})
const UserSchema=require("../models/userModel")
const bcrypt=require("bcryptjs")
const express=require("express")
const router=express.Router()

router.post('/register',async(req,res)=>{
    try {
        const {name,email,password}=req.body
        if(!name||!email||!password){
            return res.status(400).json({message:"All field(name,email and password) are required"})
        }
        const existingUser = await UserSchema.findOne({email})
        if(existingUser){
            return res.status(400).send({message:"User already exists"})
        }
        
        else{
            const saltAsync=await bcrypt.genSalt(10)
            const hashedPassword=await bcrypt.hash(password,saltAsync)
            const newUser=new UserSchema({name,email,password:hashedPassword})
            await newUser.save()
            res.status(201).send({message:"User registered successfully"})
        }
    } catch (error) {
        res.status(500).send({message:"Internal server error"})
    }
})


router.post()
module.exports=router
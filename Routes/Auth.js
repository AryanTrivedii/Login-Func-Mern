const express=require('express')
const router=express.Router()
const User =require('../Model/Musers')
const Cart=require('../Model/CartSchema')
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 
router.post('/register',async(req,res)=>{
const {email,password}=req.body
try {
  console.log(email,password)
const existingUser= await User.findOne({email})
if(existingUser){
 res.status(201).json({message:"User Already Saved"})    
}
const hashedpassword=await bcrypt.hash(password,10)
const newUser = new User({
    email,
    password:hashedpassword

})
await newUser.save()
res.json({message:"User Saved Successfully"})
} catch (error) {
  res.status(500).json({ message: "Error in the User Registration", error: error.message });
}
})

router.post('/login',async(req,res)=>{
const {email,password}=req.body

try {
  const user = await User.findOne({email})
  if(!user){
    res.json({message:"No user of this name"})
  }
  const passwordmatch= await bcrypt.compare(password,user.password)
  if(!passwordmatch){
    res.status(401).json({message:"Invalid Password"})
  }  
  const token = jwt.sign({ userId: user._id }, '2399')
res.json({message:"lOGIN sUCESSFULL",token})
} catch (error) {
  res.status(500).json({message:error})
  console.log(error)
}
})
router.post("/cart",async(req,res)=>{
const {userId}=req.user
const {itemId,quantity,price}=req.body
try {
 let cart = await Cart.find({userId}) 
 if(!cart){
  cart =new Cart({
    userId,
    items:[],
  })
 }

const existingItem = cart.items.find((item) => item.itemId.equals(itemId));

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ itemId, quantity, price });
    }
    await cart.save();

    res.json({ message: "Item added to cart successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding item to cart" });
  }
});





module.exports=router
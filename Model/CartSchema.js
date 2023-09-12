const mongoose=require('mongoose')

const Cartschema =mongoose.Schema({
UserId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
items:[
{
itemId:{type:mongoose.Schema.Types.ObjectId,ref:'Product'},
quantity:Number,
price:Number

}]

})

module.exports=mongoose.model("Cart",Cartschema)
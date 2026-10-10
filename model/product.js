const  mongoose  = require("mongoose");

const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
      image:{
        type:String,
        require:true
    }
})

const Product=new mongoose.model("Products",ProductSchema)

module.exports=Product
const Product = require("../model/product")

const addProduct=async (req,res) => {
   const response= await Product.create({
        name:req.body.name,
        price:req.body.price,
        image:req.file.path.replace(/\\/g, "/")
    });

    res.json(response);
}

module.exports={
    addProduct
}
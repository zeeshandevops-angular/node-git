const productScheme = require("../models/productsSchema")

const getAllProducts = async (req,res) =>{

    const data= await productScheme.find({name:"iphone 15"})
    res.status(200).json({data});
}

const getAllProductsTesting = async (req,res) =>{
    res.status(200).json({
        msg:"I am get all products testing"
    })
}

module.exports = [getAllProducts,getAllProductsTesting]
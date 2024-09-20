const { query } = require("express");
const productScheme = require("../models/productsSchema")

const getAllProducts = async (req,res) =>{ 

    const {name,price,sort}=req.query;
    const queryObject={};

    if(name)
    {
        queryObject.name= {$regex : name};
    }
    if(price)
    {
        queryObject.price= price;
    }
    let schema=productScheme.find(queryObject)
    if(sort)
    {
        let sortFix=sort.replaceAll(","," ");
        schema.sort(sortFix)
    }

    const data= await schema; 
    res.status(200).json({data});
}

const getAllProductsTesting = async (req,res) =>{
    res.status(200).json({
        msg:"I am get all products testing"
    })
}

module.exports = [getAllProducts,getAllProductsTesting]
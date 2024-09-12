require("dotenv").config();
const connectDb = require("./db/connect")
const productSchema = require("./models/productsSchema")
const productData =  require("./products.json")

const start = async() =>{
    try{
        await connectDb(process.env.db_url)
        await productSchema.create(productData)
        console.log("collected created")
    }
    catch(error)
    {
        console.log(error)
    }
}



start()
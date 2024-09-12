const { default: mongoose } = require("mongoose")
const momgoose = require("mongoose")


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    feature:{
        type: Boolean,
        required: true
    },
    rating:{
        type: Number,
        default: 4
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    company:{
        type: String,
        enum:{
            values:["apple","samsung","mi"]
        }
    }
})

module.exports = mongoose.model('product',productSchema)
const mongoose = require('mongoose');


const favouriteSchema=new mongoose.Schema({
    uid:{
        type:String,
        required:true
    },
    cityName:{
        type:String,
        required:true
    },
    country:{
        type:String
    },
    lat:{
        type:Number
    },
    lon:{
        type:Number
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

favouriteSchema.index({uid:1, cityName:1},{unique:true})

const favouriteModel=mongoose.model("favouriteModel", favouriteSchema);

module.exports=favouriteModel
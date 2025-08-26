const mongoose=require('mongoose');

const preferenceSchema=new mongoose.Schema({
    uid:{
        type:String,
        required:true,
        unique:true
    },
    unit:{
        type:String,
        enum:['metric', 'imperial'],
        default:'metric'
    },
    lastLocation:{
        lat:{type:Number},
        lon:{type:Number},
        cityName:{type:String},
    }
});


const preferencesModel=mongoose.model("preferencesModel",preferenceSchema);

module.exports=preferencesModel
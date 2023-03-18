const mongoose = require("mongoose");

const userschema= new mongoose.Schema({

    name:{
        type:String
    },
    category:{
        type:String
    },
    caste:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    },
    percent:{
        type:Number
    },
    gender:{
        type:String
    }

})

const User = new mongoose.model("Registered", userschema);

module.exports = User;
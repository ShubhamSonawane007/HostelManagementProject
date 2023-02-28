const mongoose = require("mongoose")

const admissiondb = 'mongodb+srv://Shubham:database@cluster0.x0u5yjr.mongodb.net/Hostel?retryWrites=true&w=majority'

mongoose.connect(admissiondb).then(()=>{
    console.log("connection successful");
}).catch((err) => console.log("no connection")); 

module.exports = mongoose;
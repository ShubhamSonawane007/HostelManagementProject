const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;
require("./db/conn");

// path variables for files
const staticpath = path.join(__dirname, "../public");

app.use(express.static(staticpath)); //to run the server 

app.set("view engine" ,"ejs"); 

const routes = require("../routes/routes") 
app.use("/",routes); 

app.listen(port , ()=>{ 
    console.log(`listening at port ${port}`); 
});
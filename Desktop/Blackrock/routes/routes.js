const express = require("express")
const router = express.Router();
const Users = require("../src/models/admission");

router.route("/")
    .get((req,res)=>{
        res.render("college")
    });

router.route("/admissionform")
    .get((req,res)=>{
        res.render("admissionform")
    })
    .post(async(req,res)=>{
        try{
            const registeredusers = new Users({
                name:req.body.name,
                category:req.body.category,
                caste:req.body.caste,
                email:req.body.email,
                age:req.body.age,
                percent:req.body.percent,
                gender:req.body.flexRadioDefault
            })
            await registeredusers.save()
            res.send("Created user");
        }
        catch(error){
            res.status(201).send(error);
        }
    });


module.exports = router;
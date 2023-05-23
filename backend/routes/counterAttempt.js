//ROUTES ARE THE ENDPOINTS OF APIS
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const UserHistory = require('../models/UserHistory');
const { default: axios } = require('axios');

router.post('/', [
    ] , async (req,res) => { 
        const {email} = req.body; //here email and password -  those names (key names) you gave in Login.js file's api body, not anything random. Its called destructing
        try{
            axios.post("https://script.google.com/macros/s/AKfycbzpMypgXSFu1ml078mybnWHyboaPgo8qkXoBbY4zqKsfHtclrEvaA8pegy6OYaDnh9m/exec", {
                msg:"You have exceeded your login attempts",  //got from above lines
                email //the same email we got from destructuring
                }
                 , {
         
                 })
                 res.send('mail sent');
         
        }catch(error){
           console.error(error.message);
           res.status(500).send("Some error occurred");
        }

    });    

module.exports = router;
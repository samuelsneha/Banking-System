const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { qr } = require('../utils/qrCodeGenerator');
var rn = require('random-number');
const { default: axios } = require('axios');

const JWT_Secret = 'Hello World'; 

//checkActiveAPI.js checks with database wether the user is active or not and if yes then creates the token
router.post('/', [
        body('userID', 'Enter a valid user id').isLength({min:1})
    ] , async (req,res) => { 
        //if the above validations are not satisfied then we create errors 
        const errors = validationResult(req);
        if(!errors.isEmpty()){
          return res.status(400).json({errors: errors.array()});  
        }
        //if the above validations are satisfied 
        //here we are getting the datai n the req.body from the form which user filled in Login.js
        const {userID} = req.body; //here email and password -  those names (key names) you gave in Login.js file's api body, not anything random. Its called destructing
        try{
             //if the given mail id does not exists   
             let foundUser = await User.findOne({_id:userID});
             if(!foundUser){
                return res.status(400).json({error: "Sorry, user does not exist. Kindly register"});
             }
             const data = {
                  id: userID
             }
          const jwtToken = jwt.sign(data, JWT_Secret);
               res.json({ userIsActive:foundUser.activate, token:jwtToken}); 
              
         
             
        

        }catch(error){
           console.error(error);
           res.status(500).send("Some error occurred");
        }

    });    

module.exports = router;

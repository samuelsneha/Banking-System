//ROUTES ARE THE ENDPOINTS OF APIS
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_Secret = 'Hello World'; 
//here we are from the EnterOtp.js through verifyOtp of api.js
router.post('/', [
              body('otp', 'Enter the otp').isLength({ min:3}),
              body('qrCode', 'QR Error').isLength({min:1})
          ] , async (req,res) => { 
                const errors = validationResult(req);
                if(!errors.isEmpty()){
                  return res.status(400).json({errors: errors.array()});  
                }
                try{
                    console.log(req.body)
                   
                    res.json({status:true, message:"Verify OTP hit"});
                //catching all the errors    
                } catch(error){
                    console.error(error.message);
                    res.status(500).send("Some error occurred");
                }
            });

module.exports = router

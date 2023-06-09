//ROUTES ARE THE ENDPOINTS OF APIS
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//here we are from the EnterOtp.js through verifyOtpAPI of api.js
router.post('/', [
              body('otp', 'Enter the otp').isLength({ min:3}),
              body('qrCode', 'QR Error').isLength({min:1})
          ] , async (req,res) => { 
                const errors = validationResult(req);
                if(!errors.isEmpty()){
                  return res.status(400).json({errors: errors.array()});  
                }
                const { otp, qrCode} = req.body;//destructuring
                try{
                    console.log(req.body)
                    jwt.verify(qrCode.slice(1), otp, async(err, data) => {
                        if (err){
                            console.log("decryption error", err);
                            res.json({status:false, message:err});
                        } 
                        let updateUser = await User.findOneAndUpdate({_id: data.id}, {activate:true})
                        console.log("decrypt success", data);
                        res.json({status:true, message:data});//status and message are keys and any word can be use there
                      });
                    
                   
                   
                //catching all the errors    
                } catch(error){
                    console.error(error);
                  //  res.status(500).send("Some error occurred");
                }
            });


module.exports = router

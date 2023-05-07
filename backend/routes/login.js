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

router.post('/', [
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Password must be atleast 5 characters').isLength({ min:5}),
    ] , async (req,res) => { 
        //if the above validations are not satisfied then we create errors 
        const errors = validationResult(req);
        if(!errors.isEmpty()){
          return res.status(400).json({errors: errors.array()});  
        }
        //if the above validations are satisfied 
        //here we are getting the datai n the req.body from the form which user filled in Login.js
        const {email, password} = req.body; //here email and password -  those names (key names) you gave in Login.js file's api body, not anything random. Its called destructing
        try{
             //if the given mail id does not exists   
             let user = await User.findOne({email});
             if(!user){
                return res.status(400).json({error: "Sorry, user does not exist. Kindly register"});
             }
             //if the given mail id exists 
             //console.log(password, user.password);
             const passwordCompare = await bcrypt.compare(password, user.password); 
             if(!passwordCompare){
                return res.status(400).json({error: "Enter the correct password"});
             } 
             //to use in jwt for encryption purpose
             const data = { 
                userKey: { 
                    id: user.id //id is the key and its value is user.id
                }
             }
               var options = {
               min:  1000
               , max:  9999
               , integer: true
               }
               const otp = rn(options) 
               //As soon as you login, you need to get the otp. So we re putting this code here
               // axios.post("https://script.google.com/macros/s/AKfycbzpMypgXSFu1ml078mybnWHyboaPgo8qkXoBbY4zqKsfHtclrEvaA8pegy6OYaDnh9m/exec", {
               // otp,  //got from above lines
               // email //the same email we got from destructuring
               // }
               //  , {
        
               //  })
             const jwtToken = jwt.sign(data, JWT_Secret);  
             //console.log("qr log",qr(user.id, user.email));
             //LHS can be given any name like here we gave qrCode, RHS qr means the qr function in the qrGenerator.js file as its name is that there, the user is the user we obtained from findOne() function 
             //and by doing user.id means we are sending the id parameter of that obtained user to the qr function
             //res.json({jwtToken, qrCode:qr(user.id, user.email)}); //we faced the issue that the base64 from the second func of qrCodeGenerator.js file format was visible in terminal ( after a delay ie. after console.log of "qr log" but in actual it should had been before it ) but not in postman. So to resolve this issue we did do_after_getting_qr in this file and what_to_dodo_after_getting_qr(code) in qrCodeGenerator.js file. 
             //return 
             let do_after_getting_qr = (data)=>{ //parameter in which code vale from qrGenerator.js will come
               //data will be in base64 format ie. string
               //jwtToken and otp we are accessing from the above lines and from the data parameter we are accessing the data with key qrCode which we could have given any name
               res.json({jwtToken, qrCode:data, otp}); 
         
             }
             //here we are not calling the function, the entire function will come here
             qr(user.id, user.email, otp, do_after_getting_qr ); 

        }catch(error){
           console.error(error.message);
           res.status(500).send("Some error occurred");
        }

    });    

module.exports = router;
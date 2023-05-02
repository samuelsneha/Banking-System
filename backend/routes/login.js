const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { qr } = require('../utils/qrCodeGenerator');
var rn = require('random-number');

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
        const {email, password} = req.body; //here email and password -  those names only we gave from the schema, not anything random. Its called destructing
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
             const data = { //? why and 52
                userKey: {
                    id: user.id
                }
             }
             var rn = require('random-number');
               var options = {
               min:  1000
               , max:  9999
               , integer: true
               }
               const otp = rn(options)
             const jwtToken = jwt.sign(data, JWT_Secret);  
             //console.log("qr log",qr(user.id, user.email));
             //LHS can be given any name like here we gave qrCode, RHS qr means the qr function in the qrGenerator.js file as its name is that there, the user is the user we obtained from findOne() function 
             //and by doing user.id means we are sending the id parameter of that obtained user to the qr function
             //res.json({jwtToken, qrCode:qr(user.id, user.email)}); //here we faced one issue that ?
             let do_after_getting_qr = (data)=>{ //?
               res.json({jwtToken, qrCode:data, otp}); 
             }
             //here we are not calling the function, the entire function will come here
             qr(user.id, user.email, do_after_getting_qr ); 

        }catch(error){
           console.error(error.message);
           res.status(500).send("Some error occurred");
        }

    });    

module.exports = router;
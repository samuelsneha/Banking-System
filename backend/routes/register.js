const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_Secret = 'Hello World'; 

//SECOND WE DID THIS TO CREATE VALIDATIONS IN OUR PROJECT, VALIDATIONS ARE IMPORTANT SO THAT PEOPLE CANT PUT ANYTHING IN THE INPUT FIELDS
//    router.post('/', [
//        body('name', 'Enter a valid name').isLength({ min:3}),
//        body('email', 'Enter a valid email').isEmail(),
//        body('password', 'Password must be atleast 5 characters').isLength({ min:5}),
//        body('imei', 'IMEI Number must be atleast 5 digits').isLength({ min:5}),
//    ] , (req,res) => { 
//        const errors = validationResult(req);//validationResult is a function of express-validator. We pass the req as an argument and get the errors as the result
//        if(!errors.isEmpty()){
//           return res.status(400).json({errors: errors.array()}); 
//        } //Till here we did the validation part, once its done we do creation of the user  
//        User.create({
//            name:req.body.name,
//            email:req.body.email,
//            password:req.body.password,
//            imei:req.body.imei,
//      }). res.json(user)
//      .catch(err => {console.log(err)
//       res.json({error: 'Please enter a unique value for email', message: err.message})})
//      //res.send(req.body);
//     });

//THIRD WE DID THS AND COMMENTED THE 'User.createIndexes();'. User.createIndexes(); is an inbuilt way to figure out whether the email is nique or no, but here this one does it in a customized way
router.post('/', [
              body('name', 'Enter a valid name').isLength({ min:3}),
              body('email', 'Enter a valid email').isEmail(),
              body('password', 'Password must be atleast 5 characters').isLength({ min:5}),
              body('imei', 'IMEI Number must be atleast 5 digits').isLength({ min:5}),
          ] , async (req,res) => { 
                const errors = validationResult(req);
                if(!errors.isEmpty()){
                  return res.status(400).json({errors: errors.array()});  
                }
                try{   
                    let user =  await User.findOne({email:req.body.email});
                    if(user){
                    return res.status(400).json({error: "Sorry a user with this this mail id already exists"});
                    }
                    //generating the salt and then appending the salt with the user's password
                    const salt = await bcrypt.genSalt(10);
                    const hashedPass = await bcrypt.hash(req.body.password, salt);
                    //creating the new user
                    user = await User.create({
                            name:req.body.name,
                            email:req.body.email,
                            password:hashedPass,
                            imei:req.body.imei,
                    });
                    //creating the jwt token
                    const data = {
                        user: {
                            id: user.id
                        }
                    }
                    const jwtToken = jwt.sign(data, JWT_Secret);
                    //res.json(user) earlier we did this
                    res.json(jwtToken);
                //catching all the errors    
                } catch(error){
                    console.error(error.message);
                    res.status(500).send("Some error occurred");
                }
            });


// FIRST WE DID THIS
// router.post('/', (req,res) => {
//     console.log((req.body))
//     const user = User(req.body);
//     console.log(user);
//     user.save();
//     res.send(req.body + "hello");
// });

module.exports = router

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

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
        const {email, password} = req.body;
        try{
             //if the given mail id does not exists   
             let user = User.findOne({email});
             if(!user){
                return res.status(400).json({error: "Sorry, user does not exist. Kindly register"});
             }
             //if the given mail id exists
             const passwordCompare = bcrypt.compare(password, user.password);
             if(!passwordCompare){
                return res.status(400).json({error: "Enter the correct password"});
             } 
             const data = {
                user: {
                    id: user.id
                }
             }
             const jwtToken = jwt.sign(data, JWT_Secret);  
             res.json(jwtToken);
        }catch(error){
           console.error(error.message);
           res.status(500).send("Some error occurred");
        }

    });    

module.exports = router;
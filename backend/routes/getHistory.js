//ROUTES ARE THE ENDPOINTS OF APIS
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { qr } = require("../utils/qrCodeGenerator");
var rn = require("random-number");
const { default: axios } = require("axios");
const UserHistory = require("../models/UserHistory");

const JWT_Secret = "Hello World";

router.post("/", [], async (req, res) => {
  const { token } = req.body; //here email and password -  those names (key names) you gave in Login.js file's api body, not anything random. Its called destructing
  try {
    jwt.verify(token, JWT_Secret, async (err, data) => {
      console.log(data);
      if(err){
        return res
        .status(400)
        .json({ error: "Token decryption error" });
      }
      let user = await User.findOne({ _id: data.id });
       //if the given mail id does not exists
      if (!user) {
        return res
          .status(400)
          .json({ error: "Sorry, user does not exist. Kindly register" });
      }
      // if user exists
      let getAllHistory = await UserHistory.find({
        userEmail: user.email,
      });
      res.json({ getAllHistory });
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

module.exports = router;

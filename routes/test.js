const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("../db/conn");
const emailvalidator = require("email-validator");
const passwordComplexity = require("joi-password-complexity");
const validator = require("validator");
const User = require("../model/userSchema");


router.post("/registration", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;
  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "fill all fields for registration" });
  } else if (emailvalidator.validate(email)) {
    if (validator.isStrongPassword(password)) {
      try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
          return res.status(406).json({ error: "Email already registrated." });
        } else if (!validator.isMobilePhone(phone)) {
          return res
            .status(405)
            .json({ error: "Please enter correct phone number" });
        } else if (password == cpassword) {
          const user = new User({ name, email, phone, password, cpassword });
          //for hashing the password and encrypt
          await user.save();
          res.status(201).json({ message: "user registared successfully" });
        } else {
          return res
            .status(401)
            .json({ message: "Password and Confirm password should be same" });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      return res.status(402).json({ message: "user password not strong" });
    }
  } else {
    return res.status(400).json({ error: "fill all fields for registration" });
  }
  // User.findOne({ email: email }).then((userExist) => {
  //     if (userExist) {
  //         return res.status(422).json({ error: "Email already registrated." });
  //     }
  //     const user = new User({ name, email, phone, password, cpassword });
  //     user.save().then(()=>{
  //         res.status(201).json({message:"user registared successfully"});
  //     }).catch(err=>{console.log(err);});
  // })
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ error: "fill all fields for login" });
  }
  try {
    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatching = await bcrypt.compare(password, userLogin.password);
      token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatching) {
        return res.status(404).json({ message: "invalid details" });
      } else {
        return res.status(200).json({ message: "Login Successful" });
      }
    } else {
      return res.status(404).json({ message: "invalid details" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

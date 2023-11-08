const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
// create a user using :POST "/api/auth/createUser". no login required
router.post(
  "/createuser",
  [
    body("name", "name must be atleast 3 letters").isLength({ min: 5 }),
    body("email", "email must be  unique").isEmail(),
    body(
      "password",
      "password must be contain @ and other special char"
    ).isLength({ min: 5 }),
  ],
  async (req, res) => {
    // if there are errors return bad and errorsrequest
    const errors = validationResult(req);
    console.log(!errors.isEmpty());
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // his code snippet is creating a new user record in a database using data provided in the request body. It then responds with the created user object in JSON format.
    // check whether user with same email exist

    try
    {
    let user= await User.findOne({email:req.body.email});
    if(user)
    {
      return res.status(400).json({error:"sorry with this emailid user already exist"})
    }

     user=await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    })
      // .then((user) => res.json(user)).catch(err=>{console.log(err)
      // res.json({error:'please enter a unique value for mail',message:err.message})})
      res.json(user)
  }
  catch(error)
  {
    console.error(error.message);
    res.status(500).send("some error occured")
  }
  }
);

module.exports = router;

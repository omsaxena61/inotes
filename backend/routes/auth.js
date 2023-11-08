const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/",
  [
    body("name", "name must be atleast 3 letters").isLength({ min: 5 }),
    body("email", "email must be  unique").isEmail(),
    body(
      "password",
      "password must be contain @ and other special char"
    ).isLength({ min: 5 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    console.log(!errors.isEmpty());
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // his code snippet is creating a new user record in a database using data provided in the request body. It then responds with the created user object in JSON format.
    User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    })
      .then((user) => res.json(user))
      
  }
);

module.exports = router;

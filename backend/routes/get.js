const  express= require('express');
const router1= express.Router();

router1.get('/', (req, res) => {
    res.send('Hello World!')
    console.log("app4");
  })

  module.exports=router1;
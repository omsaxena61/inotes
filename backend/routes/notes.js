const  express= require('express');
const router= express.Router();

router.get('/',(req,res)=>{
 obj={
    a:'OM2',
    number:'7'
 }
   res.json(obj);
})

module.exports=router
var express=require('express');
var router=express.Router();
var bodyparser=require('body-parser');
var bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');
var User=require('../models/user');
console.log("rgdggd");
router.post('/register',(req,res,next)=>
{    
    console.log(req.body);
    var user=new User({
     name:req.body.name,
     email:req.body.email,
     password:bcrypt.hashSync( req.body.password,10)
    });
    user.save((err,user)=>
    {
        if(err)
        {
           
        return res.status(200).json({
            title:'An error occured',
            error:err,
            success:false

        });
        }
       
        res.status(201).json({
            message:'Saved messages',
            obj:user,
            success:true
        });
    });
});
router.post('/signin',(req,res,next)=>
{
    var password=req.body.password;
    User.findOne({
        email:req.body.email
       },(err,user)=>
    {
        if(err)
        {
            console.log("username or password is wrong");
            res.status(500).json({
                message:'Login Credentials are wrong',
                success:false
            });
        }
        if(!user){
            res.status(500).json({
                message:'Login Credentials are wrong',
                success:false
            });
    }
        else
        if(!bcrypt.compareSync(password,user.password))
        {
            console.log('wrong password');
            res.status(500).json({
                message:'Login Credentials are wrong',
                success:false
            });
        }else{
        var token=jwt.sign({user:user},'akash',{expiresIn:7200});
        //  console.log(token);
        
          res.status(200).json({
              message:'Successfully Logged in',
              token:token,
              userId:user._id,
              userName:user.name,
              email:user.email,
              success:true
          });
        }
        
      
    });
});
module.exports=router;

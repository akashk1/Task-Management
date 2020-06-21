var express=require('express');
var router=express.Router();
var bodyparser=require('body-parser');
var List=require('../models/archive');
router.post('/addTask',(req,res,next)=>
{    
    console.log(req.body);
    var list=new List({
     user_id:req.body.user_id,
     task:req.body.task,
     start_date: req.body.start_date,
     deadline_date:req.body.deadline_date,
     label:req.body.label,
     status:req.body.status
    });
    list.save((err,task)=>
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
            obj:task,
            success:true
        });
    });
});
router.post('/getAll',(req,res,next)=>{
    console.log(req.body.id);
    List.find({user_id:req.body.id},(err,tasks)=>{
        if(err){
            res.send({success:"Failed to add user",status:500});
        }
       // console.log(tasks);
        res.status(200).json(tasks);
    })
})
module.exports=router;

var express=require('express');
var router=express.Router();
var bodyparser=require('body-parser');
var List=require('../models/task_list');
console.log("rgdggd");
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
router.post('/updateTask',(req,res,next)=>{
    var data = {
        _id : req.body['_id'],
        user_id : req.body.user_id,
        task: req.body.task,
        start_date: req.body.start_date,
        deadline_date : req.body.deadline_date,
        label:req.body.label,
        status:req.body.status
    }
    List.findByIdAndUpdate(req.body['_id'],data,(err,data)=>{
        if(err){
            res.status(200).json({
             title:'error occured',
             error:err,
             success:false
            });
        }
        res.status(201).json({
            message:'task updated',
            obj:data,
            success:true
        });
    });
});
router.post('/deleteTask',(req,res,next)=>{
    List.findByIdAndDelete(req.body['_id'],(err,data)=>{
        if(err){
            res.status(200).json({
             title:'error occured',
             error:err,
             success:false
            });
        }
        res.status(201).json({
            message:'task deleted',
            obj:data,
            success:true
        });
    });
});
module.exports=router;

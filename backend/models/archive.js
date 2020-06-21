var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var ArchiveSchema=Schema(
    {
        user_id:{type:String ,required:true },
        task:{type:String ,required:true},
        start_date:{type:String,required:true},
        deadline_date : {type:String,required:true},
        label:{type:String,required:true},
        status:{type:String,required:true}
    }
)
module.exports=mongoose.model('Archive',ArchiveSchema,'Archive');
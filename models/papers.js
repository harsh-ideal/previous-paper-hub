const mongoose=require('mongoose');
const Course = require('./course');
const {Schema}=mongoose;
const paperSchema=new Schema({
    code:{
        type:String,
    },
    papername:{
        type:String,
    },
    dept:{
        type:Schema.Types.ObjectId,
        ref:'Course.department',
    },
    course:{
        type:Schema.Types.ObjectId,
        ref:'Courses'
    },
    paper:[{
        year:{
            type:String,
        },
        link:{
            url:String,
            filename:String,
        },
        postBy:{
            name:String,
            email:String,
        }
    }],
});

const Paper=mongoose.model('Paper',paperSchema);

module.exports=Paper;

const mongoose=require('mongoose')

//schema
const Schema=mongoose.Schema

const noteSchema=new Schema({
            title:{
                type:String
            },
            description:{

                type:String
            },
            createAt:{
                type:Date,
                default:new Date()
            },
            noteimage:{
                type:String
            },
            category:{
                type:Schema.Types.ObjectId,
                ref:'Category',
                required:true
            }
})



const Note= new mongoose.model('Note',noteSchema)

module.exports=Note
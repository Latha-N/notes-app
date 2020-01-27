const mongoose=require('mongoose')
const Schema=mongoose.Schema

const categorySchema=new Schema({
    name:{
        type:String,
        required:true
    },
    // note:[{
    //     type:Schema.Types.ObjectId,
    //    // ref:'Note'
    // }]
})
const Category= new mongoose.model('Category',categorySchema)

module.exports=Category
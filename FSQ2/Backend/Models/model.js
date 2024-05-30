const mongoose=require('mongoose')
const Schema=mongoose.Schema
prodSch=new Schema({
    pN:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    rate:{
        type:Number,
        required:true
    },
    disc:{
        type: Number,
        required:true
    },
    avail:{
        type:String,
        required:true
    }
}, {timestamps:true})

module.exports=mongoose.model('prodSch',prodSch)
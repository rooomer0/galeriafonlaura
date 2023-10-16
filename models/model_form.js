const mongoose = require("mongoose");
const {Schema}=mongoose;

const campos = {
    name:{
        type:String,
    },
    assist:{
        type:String,
    },
    alergy:{
        type:String,
    },
    transport:{
        type:String,
    },
    email:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
}

const form = new Schema (campos,{
    timestamp:true,
    toJSON:{
        virtuals:true,
    },
    toObject:{ 
        virtuals: true 
    }
});

module.exports= {Form:mongoose.model('forms',form),
    campos
};

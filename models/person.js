const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type : String,
        require:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:["chef","manger","waiter"],
        require:true

    },
    mobile:{
        type:String,
      require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    address:{
        type:String
    }
    ,
    salary:{
        type:Number,
        require:true
    }
});

//create person model
const person = mongoose.model('person',personSchema);
module.exports=person;

const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    imei:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    }
});
const User = mongoose.model('user', UserSchema);
//User.createIndexes(); We have replaced this with function 3 in register.js
module.exports = User;
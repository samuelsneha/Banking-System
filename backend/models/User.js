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
    },
    activate:{
        type:Boolean,
        default:false,
        required:true  //successful 2fa makes activate true; unsuccessful 2fa makes it default ie. false
    }
});
const User = mongoose.model('user', UserSchema);
//User.createIndexes(); We have replaced this with function 3 in register.js
module.exports = User;
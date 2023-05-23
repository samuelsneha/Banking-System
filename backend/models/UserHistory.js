const mongoose = require('mongoose');
const { ObjectId } = require("mongodb");
const {Schema} = mongoose;

const UserHistorySchema = new Schema({
    loginSuccess:{
        type:Boolean,
        required:true
    },
    userEmail:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default: Date.now
    }
});
const UserHistory = mongoose.model('UserHistory', UserHistorySchema);
//UserHistory in quotes is the Table name of the Collection 
module.exports = UserHistory;
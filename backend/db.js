//we created this file so that we could connect to mongodb database
const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017";
const connectToMongo = async()=> {
    try{
        mongoose.set("strictQuery",false)
        mongoose.connect(mongoURI)
        console.log("Mongo connected")
    }
    catch(error){
        console.log(error)
        process.exit()
    }
  //console.log('Connected to MongoDB Successfully');
  //  });
}
module.exports = connectToMongo;

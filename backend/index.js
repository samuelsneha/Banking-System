//To run the backend folder, first of all reach till backend in the command line and then do: npm run server
//ENTRYPOINT OF BACKEND
const connectToMongo = require('./db');
const express = require('express');
const cors = require("cors");
const app = express();
const port = 5000;

connectToMongo();
app.use(express.json());//now using this middleware you can access request.body
app.use( //gives access to apis to redirect through a secure path even while using http  
  cors(
    //{
  //  origin: ["http://localhost:3000", 'https://lighthearted-phoenix-47e0f4.netlify.app'], //from where the api starts ie. the front end
 // }
   
  )
);
app.get('/', (req, res) => {
  res.send('Hello World!')
})


//Available Routes ie. we are defining the endpoints over here
app.use('/user/login', require('./routes/login'));
app.use('/user/register', require('./routes/register'));
app.use('/user/verifyOtp', require('./routes/verifyOtp'));
app.use('/user/checkActive', require('./routes/checkActive'));
app.post('/user/test', (req,res)=>{ res.json({status:true})});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

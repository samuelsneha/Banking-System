//To run the backend folder, first of all reach till backend in the command line and then do: npm run server
const connectToMongo = require('./db');
const express = require('express');
const app = express();
const port = 5000;

connectToMongo();
app.use(express.json());//now using this middleware you can access request.body
app.get('/', (req, res) => {
  res.send('Hello World!')
})


//Available Routes ie. we are defining the endpoints over here
app.use('/user/login', require('./routes/login'));
app.use('/user/register', require('./routes/register'));
app.get('/test', (req,res)=>{ console.log(req)});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//API does the work of passing the data from the Front End to the routes and it goes through index.js for it
import axios from "axios";
//this link we have taken after downloading ngrok and then typing the commaind "ngrok http 5000" in the ngrok terminal and then /user remains as it is
//initially it was "http://localhost:5000/user "
const base_url = "https://6ca9-103-10-226-160.ngrok-free.app"+'/user'  


export const testAPI = () => {
    axios.post(base_url+"/test", { 
    // what all data we want to send while hitting the request comes here like the body of the request
     }, {
    // everything apart from the body of the request like headers, authorization  etc comes here 
     }) 
         .then((response) => response.data) //whatever axios returns, it returns in an object Response with data as the key, so we access it using data
         .then((response) => { //for error purpose
      console.log(response)
    });
  }

  export const registerAPI = (body) => { // register of routes work should be here na? confused between api and routes work?
    axios.post(base_url+"/register", //the route here should be quivalent to the route in index.js of BE
    // what all data we want to send while hitting the request comes here like the body of the request
    body
     , {
    // everything apart from the body of the request like headers, authorization  etc comes here 
     }) 
         .then((response) => response.data) //whatever axios returns, it returns in an object Response with data as the key, so we access it using data
         .then((response) => {
      console.log(response)
    });
  }
  
  export const loginAPI = (body , cb) => { 
    axios.post(base_url+"/login", //the route here should be quivalent to the route in index.js of BE
    // what all data we want to send while hitting the request comes here like the body of the request
    body
     , {
    // everything apart from the body of the request like headers, authorization  etc comes here 
     }) 
         .then((response) => response.data) //whatever axios returns, it returns in an object Response with data as the key, so we access it using data
         .then((response) => {
      console.log(response)
      cb(response); //from here it goes to Login.js  login api response
    });
  }
  
  export const verifyOtp = (body, cb) => {
    axios.post(base_url+"/verifyOtp", 
    // what all data we want to send while hitting the request comes here like the body of the request
    body
     , {
    // everything apart from the body of the request like headers, authorization  etc comes here 
     }) 
         .then((response) => response.data) //whatever axios returns, it returns in an object Response with data as the key, so we access it using data
         .then((response) => {
      console.log(response)
      cb(response);
    });

  }
  
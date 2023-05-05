import axios from "axios";

const base_url = "http://localhost:5000/user" 


export const testAPI = () => {
    axios.post(base_url+"/test", { 
    // what all data we want to send while hitting the request comes here like the body of the request
     }, {
    // everything apart from the body of the request like headers, authorization  etc comes here 
     }) 
         .then((response) => response.data) //whatever axios returns, it returns in an object Response with data as the key, so we access it using data
         .then((response) => {
      console.log(response)
    });
  }

  export const registerAPI = (body) => {
    axios.post(base_url+"/register", 
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
    axios.post(base_url+"/login", 
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
  
import react, {useState, useEffect} from 'react'
import { loginAPI } from '../utils/api';
import { Link, useNavigate } from 'react-router-dom';
const axios = require('axios')

export const Login = ({setuserDataFunc}) => { //since this is not default export you will have to import it using the same name Login and with {}
    const [email, setEmail] = useState('xyz1@gmail.com');
    const [password, setPassword] = useState('xyzpass');
    const navigate = useNavigate(); //useNavigate is a hook like useState and we can give any name to LHS navigate
    
    return(
        <>
        <div>
            <label htmlFor="email">Enter your Email:</label><br/>
            <input type="email" value= {email} placeholder="yourmail@gmail.com" id="email" name="email" 
          onChange={(e) => {
            setEmail(e.target.value);
          }}/><br/>
            <label htmlFor="password">Enter your Password:</label><br/>
            <input type="password" value = {password} id="pass" name="pass" placeholder='********'  
          onChange={(e) => {
            setPassword(e.target.value);
          }}/>
            <button type='submit'  onClick={() => {
            //API does the work of passing the data to the routes and it goes through index,js for it  
            loginAPI({
              //these two lines are the body of API
              email: email,
              password: password,
            } , 
            //this arrow function which is the second parameter in this function is the cb in login api.js
            (response)=> { //after login we need to get data of otp and qrcode, so we have added this extra function
                setuserDataFunc( response) //the res.json from login.js file comes here through the cb of api.js
                navigate('/qrDisplay'); //one of the functionality of react to navigate, can be used anywhere.The route used here is Frontend route
            });
          }}> Log In </button>
        </div>
        <Link to="/register">Don't Have an Account ? Register Here </Link>
        </>
    )
} 
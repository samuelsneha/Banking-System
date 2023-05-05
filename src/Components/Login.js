import react, {useState, useEffect} from 'react'
import { loginAPI } from '../utils/api';
import { useNavigate } from 'react-router-dom';
const axios = require('axios')

export const Login = ({setuserDataFunc}) => { //since this is not default export you will have to import it using the same name Login and with {}
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
     
    const handleSubmit = (e) => {
         e.preventDefault();
        console.log(e, "onclick");
        //function to verify whether the user's email and password is correct
        
        

    }
    
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
            loginAPI({
              email: email,
              password: password,
            } , (response)=> {
                setuserDataFunc( response)
                navigate('/qrDisplay');
            });
          }}> Log In </button>
        </div>
        <a href='/register'> Don't Have an Account ? Register Here </a>
        </>
    )
} 
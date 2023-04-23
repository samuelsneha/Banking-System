//props is something we pass as a variable to get rendered in our components.
// State belongs to a component, it was developed so that we can use features( like instead of this.state we use useState() ) of a class based component in function based component, it should be inside a function only, can be used in {} throughout your component, 
import React, {useEffect, useState} from 'react'
import bankImage from '../bankImage.jpg' //by doing ../ you reached to components and all files in it parallel where one of the file is the bankImage
import './Header.css';
import {Login} from './Login';
import {Register} from './Register'; //for default export we don't require {} but for other export we require {}
//import { useNavigate } from "react-router-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link 
} from 'react-router-dom'

export default function Header(){
    const [theme, setTheme] = useState(true);

    const convertTheme=()=>{
       setTheme(!theme)
    }

    useEffect(()=>{
       if(!theme){
         document.body.classList.add("darkTheme");
       }else{
        document.body.classList.remove("darkTheme");
       } 
    })

    const handleClick = (e) => {
        //console.log('its inside click button')
         if(e == 'login'){
            console.log('its login')

         }
         if(e == 'register'){
            console.log('its register')
         }
         
    }
   
    return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        < div className="container-fluid">
            {/* <Router> */}
            <a href="#"> <img alt="Replublic bank of India" src={bankImage} height={500} width={500}/> </a> 
            <a className="navbar-brand" href="#">About Us </a>
            <Link to="/register">
                <button type="button" class="btn btn-outline-primary" onClick={() => handleClick('register')}>Register </button>
                 </Link>    
            <Link to="/login"> <button type="button" className="btn btn-outline-primary" onClick={() => handleClick('login')} >Log In </button> </Link>
            <button type="button" className="btn btn-outline-primary" onClick={convertTheme}> <i class="fa fa-adjust" aria-hidden="true"></i> </button>
        </div>    
    </nav>
     
    </>
    );
}
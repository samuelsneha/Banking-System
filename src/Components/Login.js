import react, {useState, useEffect} from 'react'

export const Login = () => { //since this is not default export you will have to import it using the same name Login and with {}
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     
    const handleSubmit = (e) => {
         e.preventDefault();
        console.log(e, "onclick");
        //function to verify whether the user's email and password is correct
        
        

    }
    
    return(
        <>
        <form action="/user/login" method = "post" onSubmit={handleSubmit}>
            <label htmlFor="email">Enter your Email:</label><br/>
            <input type="email" value= {email} placeholder="yourmail@gmail.com" id="email" name="email"/><br/>
            <label htmlFor="password">Enter your Password:</label><br/>
            <input type="password" value = {password} id="pass" name="pass" placeholder='********'/>
            <button type='submit'> Log In </button>
        </form>
        <a href='/register'> Don't Have an Account ? Register Here </a>
        </>
    )
} 
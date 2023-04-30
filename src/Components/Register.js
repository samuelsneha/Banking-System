import react, {useState, useEffect} from 'react'
import qrcode from "qrcode";

export const Register = () => { //since this is not default export you will have to import it using the same name Register and with {}
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //Function to register 
    }

    return(
        <>
        <form method = "post" action="/user/register" onSubmit={handleSubmit}>
            <label htmlFor="fname">Enter your First Name:</label><br/>
            <input type="text" placeholder="First Name" id="fname" name="fname"/><br/>
            <label htmlFor="lname">Enter your Last Name:</label><br/>
            <input type="text" placeholder="Last Name" id="lname" name="lname"/><br/>
            <label htmlFor="email">Enter your Email:</label><br/>
            <input type="email" placeholder="yourmail@gmail.com" id="email" name="email"/><br/>
            <label htmlFor="password">Enter your Password:</label><br/>
            <input type="password" id="pass" name="pass" placeholder='********'/>
            <label htmlFor="number">Enter the IMEI Number:</label><br/>
            <input type="number" id="imei" name="imei" placeholder='#########'/>
            <button type='submit'> Register </button>
        </form>
        <a href='/login'> Already have an Account ? Login Here </a>
        </>
    )
} 
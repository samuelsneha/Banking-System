import react, { useState, useEffect } from "react";
import { counterAttemptAPI, loginAPI } from "../utils/api";
import { Link, useNavigate } from "react-router-dom";
const axios = require("axios");

export const Login = ({ setuserDataFunc }) => {
  //since this is not default export you will have to import it using the same name Login and with {}
  const [email, setEmail] = useState("xyz1@gmail.com");
  const [password, setPassword] = useState("xyzpass");
  const [attemptCounter, setattemptCounter] = useState(0);
  const navigate = useNavigate(); //useNavigate is a hook like useState and we can give any name to LHS navigate
  useEffect(() => {
    if (localStorage.getItem("bankingToken")) {
      navigate("/welcome");
    }
    return () => {};
  }, []);

  return (
    <>
      <div>
        <label htmlFor="email">Enter your Email:</label>
        <br />
        <input
          type="email"
          value={email}
          placeholder="yourmail@gmail.com"
          id="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label htmlFor="password">Enter your Password:</label>
        <br />
        <input
          type="password"
          value={password}
          id="pass"
          name="pass"
          placeholder="********"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            //API does the work of passing the data to the routes and it goes through index,js for it
            loginAPI(
              {
                //these two lines are the body of API
                email: email,
                password: password,
              },
              //this arrow function which is the second parameter in this function is the cb in login api.js
              (response) => {
                if (response.error) {
                  if (response.error == "Enter the correct password") {
                    setattemptCounter(attemptCounter + 1);
                    if (attemptCounter + 1 == 3) {
                      counterAttemptAPI(
                        {
                          email: email,
                        },
                        () => {
                          alert("You have exceede your limits");
                        }
                      );
                    }
                  } else {
                    alert(response.error);
                  }
                } else { //no errors
                  //after login we need to get data of otp and qrcode, so we have added this extra function
                  setuserDataFunc(response); //the res.json from login.js file comes here through the cb of api.js and we are setting it up in the variable which stores all the user's data in the FE
                  navigate("/qrDisplay"); //one of the functionality of react to navigate, can be used anywhere.The route used here is Frontend route
                }
              }
            );
          }}
        >
          {" "}
          Log In{" "}
        </button>
        <div> {attemptCounter} </div>
      </div>
      <Link to="/register">Don't Have an Account ? Register Here </Link>
    </>
  );
};

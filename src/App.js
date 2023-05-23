//Clent side rendering - This project is client side rendering. This is used when we want to give less load on the server. Most of the websites use this. Can be identifies through loaders
//Server side rendering - The codeial was server slide rendering. It is used when we dont want anything to load on user's side and data should be immediately available from the db.
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header.js";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Test } from "./Components/Test";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { testAPI } from "./utils/api";
import { useState } from "react";
import { QRCodedisplay } from "./Components/QRCodedisplay";
import { EnterOtp } from "./Components/EnterOtp";
import { Welcome } from "./Components/Welcome";
// Any variable inside return should be in curly brackets in React 

function App() {
   //the userData needs to act as a global variable so that any file can access it, so we have created it here
  const [userData, setuserData] = useState({
    userId: "", 
    jwtToken: "",
    otp: 0,
    qrCode: "",
  });
  console.log(userData)
  return (
    <>
    {/* THESE ARE THE FRONT END ROUTES- USED FOR PAGES NAVIGATION */}
      <Router>
        {/* <Header/>  */}
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/login" element={<Login setuserDataFunc = {setuserData} />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/qrDisplay" element={<QRCodedisplay userData = {userData}/>} /> 
          {/* sending the latest user's data (updated from App.js) to the QRCodeDisplay page with the userData variable as the value and userData as the key. We could have have given any name to the key. The same key name should be there in the parameter of QRCodedisplay.js file's function */}
          <Route exact path="/enterOtp" element={<EnterOtp />} />
          <Route exact path="/welcome" element={<Welcome userData = {userData}/>} />
          {/* <Route exact path="/testing" element={<Test />} /> */}
        </Routes>
        {/* <Footer/> */}
        {/* <Login /> */}
      </Router>
      {/* <button
        onClick={() => {
          testAPI();
        }}
      >
        {" "}
        Submit{" "}
      </button> */}
    </>
  );
}

export default App;

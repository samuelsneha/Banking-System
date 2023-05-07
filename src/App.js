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

function App() {
   //the userData needs to act as a global variable so that any file can access it, so we have created it here
  const [userData, setuserData] = useState({
    jwtToken: "",
    otp: 0,
    qrCode: " ",
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
          {/* sending logged  in user's data to the QRCodeDisplay page */}
          <Route exact path="/enterOtp" element={<EnterOtp />} />
          <Route exact path="/testing" element={<Test />} />
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

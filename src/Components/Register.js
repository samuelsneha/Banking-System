import react, { useState, useEffect } from "react";
import qrcode from "qrcode";
import { registerAPI } from "../utils/api";
const axios = require("axios");

export const Register = () => {
  //since this is not default export you will have to import it using the same name Register and with {}
  const [email, setEmail] = useState(""); //email is av variable, useEmail is used to update the email variable and through useState we initialize it
  const [password, setPassword] = useState("");
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [imei, setImei] = useState("");

  return (
    <>
      <div>
        <label htmlFor="fname">Enter your First Name:</label>
        <br />
        <input
          type="text"
          placeholder="First Name"
          id="fname"
          name="fname"
          value={fname}
          onChange={(e) => {
            //onChange gives whatever you typed in the input box
            setfName(e.target.value);
            //so basically whenever onchange is triggered, we update the fName variable using setfName
            //and whatever the updated value of fNames becomes that we are updating to the input element coz input and fName are independently working (controlled/ uncontrolled compoenets concept of react)
          }}
        />
        <br />
        <label htmlFor="lname">Enter your Last Name:</label>
        <br />
        <input
          type="text"
          placeholder="Last Name"
          id="lname"
          name="lname"
          value={lname}
          onChange={(e) => {
            setlName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="email">Enter your Email:</label>
        <br />
        <input
          type="email"
          placeholder="yourmail@gmail.com"
          id="email"
          value={email}
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
          id="pass"
          name="pass"
          placeholder="********"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label htmlFor="number">Enter the IMEI Number:</label>
        <br />
        <input
          type="number"
          id="imei"
          name="imei"
          placeholder="#########"
          value={imei}
          onChange={(e) => {
            setImei(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            registerAPI({
              name: fname+" " +lname,
              email: email,
              password: password,
              imei: imei,
            });
          }}
        >
          Register
        </button>
      </div>
      <a href="/login"> Already have an Account ? Login Here </a>
    </>
  );
};

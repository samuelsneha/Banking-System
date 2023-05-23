import React, { useEffect, useState } from "react";
import { getHistoryAPI } from "../utils/api";
import { useNavigate } from "react-router-dom";

//navigation from the QRCodeDisplay.js file
export const Welcome = ({ userData }) => {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();
  let onLoad = () => {
    getHistoryAPI({ token: localStorage.getItem("bankingToken") }, (data) => {
      console.log(data);
      setHistory(data.getAllHistory);//history varable got updated here
    });
  };
  useEffect(() => {
    console.log(localStorage.getItem("bankingToken"));
    if (localStorage.getItem("bankingToken")) { 
      //to prevent a user from manipulating the FE routes on the URL and access Welcome.js
      //we first check if the user has token then only he/she can access Welcome.js
      onLoad();
    } else {
      navigate("/login");
    }

    return () => {};
  }, []);
  return (
    <>
      <div>Welcome</div>
      {history.length == 0 ? (
        "No Data Found"
      ) : (
        <div className="historyTable">
          {history.map((el) => {
            return (
              <div>
                {el.date}{" "}
                {el.loginSuccess ? "login successful" : "login unsuccessful"}{" "}
              </div>
            );
          })}
        </div>
      )}
      <button type='submit'  onClick={() => {
        (localStorage.setItem("bankingToken", '')) 
        navigate('/login')

    }}> Log Out </button>
    </>
  );
};

import React, { useEffect } from 'react'
import { checkActiveAPI } from '../utils/api';
import { useNavigate } from 'react-router-dom';

//navigating to this page from Login.js after updating the user's data to see the qr code
export const QRCodedisplay = ({userData}) => {
  //goes to checkActiveAPI.js (checkActiveAPI.js checks with database wether it is active or not) to verify whether the user has been activated or no
  let c = () => {
      setTimeout(() => {
      checkActiveAPI({userID:userData.userId}, (data) => {
        console.log(data) //the two return statements from checkActiveAPI.js 
        localStorage.setItem("bankingToken", data.token); //setting the localStorage which is in the user's UI with the token. .token is coming from the checkActiveAPI.js as the key 
        if(data.userIsActive){ //.userIsActive is coming from the checkActiveAPI.js as the key 
          navigate('/welcome')
          return
        }
        c()
      })
    }, 5000);
  };
  const navigate = useNavigate()
  useEffect(() => {
   if( userData.qrCode == ''){
    navigate('/login')
   }
    else{
    c()
   } 
  }, [])
  console.log(userData)
  return (
    <div>QRCodedisplay
      <img src = {userData.qrCode} />
      {/* Its visible tous in png/jpeg but actually in base 64 */}
      {/* {userData.userId}  */}
      {/* qrCode same as the key in the App.js */}
    </div>
  )
}


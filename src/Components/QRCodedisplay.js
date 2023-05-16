import React, { useEffect } from 'react'
import { checkActive } from '../utils/api';
import { useNavigate } from 'react-router-dom';

//navigating to this page from Login.js after updating the user's data to see the qr code
export const QRCodedisplay = ({userData}) => {
  let c;
  const navigate = useNavigate()
  useEffect(() => {
    c = setInterval(() => {
      checkActive({user:userData.userId}, (data) => {
        console.log(data)
        if(data.userIsActive){
          navigate('/welcome')
        }
      })
    }, 5000);
  
    return () => {
       c = clearInterval()
    }
  }, [])

  return (
    <div>QRCodedisplay
      <img src = {userData.qrCode} />
      {userData.userId} 
      {/* qrCode same as the key in the App.js */}
    </div>
  )
}

//flow of the process?
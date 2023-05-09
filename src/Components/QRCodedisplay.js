import React from 'react'

//navigating to this page from Login.js after updating the user's data to see the qr code
export const QRCodedisplay = ({userData}) => {
  return (
    <div>QRCodedisplay
      <img src = {userData.qrCode} /> 
      {/* qrCode same as the key in the App.js */}
    </div>
  )
}

//flow of the process?
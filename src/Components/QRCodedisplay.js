import React from 'react'

//where are we navigating to this page?
export const QRCodedisplay = ({userData}) => {
  return (
    <div>QRCodedisplay
      <img src = {userData.qrCode} /> 
    </div>
  )
}

//flow of the process?
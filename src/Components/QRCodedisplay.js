import React from 'react'

export const QRCodedisplay = ({userData}) => {
  return (
    <div>QRCodedisplay
      <img src = {userData.qrCode} /> 
    </div>
  )
}

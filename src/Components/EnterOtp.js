import React, { useState } from 'react'//? different from others
import { verifyOtpAPI } from '../utils/api'; //?

//we navigate to this page after scanning the qr code
//since we want to redirect the displayed qr code along with its encrypted data, we have mentioned the navigation to this page in qrCodeGenerator.js file where we are getting the qr code
//the qr code scanner application scans the qr code, reads the 'netlifyURL+'enterOtp/?'+encryptedData' in the form of string and then redirects
export const EnterOtp = () => {
  const [otp, setOtp] = useState("")

  return (
    <div>EnterOtp
          <label htmlFor="otp">Enter your OTP:</label><br/>
            <input type="number" value= {otp} placeholder="****" id="otp"
          onChange={(e) => {
            setOtp(e.target.value);
          }}/>
          <button onClick={() => verifyOtpAPI( {otp, qrCode:window.location.search}, ()=> {})}>Verify</button>
          {/* so basically here we are sending the otp and the encrypted string to the api */}
    </div>
  )
}

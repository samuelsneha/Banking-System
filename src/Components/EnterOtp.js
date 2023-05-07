import React, { useState } from 'react'//? different from others
import { verifyOtp } from '../utils/api'; //?

//where are we navigating to this page?
export const EnterOtp = () => {
  const [otp, setOtp] = useState("")

  return (
    <div>EnterOtp
          <label htmlFor="otp">Enter your OTP:</label><br/>
            <input type="number" value= {otp} placeholder="****" id="otp"
          onChange={(e) => {
            setOtp(e.target.value);
          }}/>
          <button onClick={() => verifyOtp( {otp, qrCode:window.location.search}, ()=> {})}>Verify</button>
    </div>
  )
}

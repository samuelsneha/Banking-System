import axios from 'axios';
import React from 'react'
import { testAPI } from '../utils/api';
//?what is this file doing and why inside components
const current_qr = ""
export const Test = () => {
 
  return (
    <div>
      {/* base-64 of image's value starting with (data:image/any image format) can be used in img tag */}
      <img src = "" />
      <button onClick={()=> {
        testAPI()
      }}> Click </button> 
      </div> 
    
  )
}

//fetch api - promise based, rest api - stateful 
//axios - automatically json, promise based , follows rest 
// basically the evolution goes like : xhr -> fetch -> axios
//fe and be apis - no such categories
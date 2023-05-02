//const User = require('../models/User');
const QRCode = require('qrcode');

 const qr = (currentID, currentEmail, what_to_dodo_after_getting_qr)=> {
  let data = {
    email:currentEmail,
    id:currentID
  }
  let stringdata = JSON.stringify(data);
  // return QRCode.toString(stringdata,{type:'terminal'},function (err, QRcode) {
  //     if(err) 
  //     return console.log("error occurred")
  //     console.log(QRcode)
  //     return QRcode 
  // });
  return QRCode.toDataURL(stringdata, function (err, code) { //? why this and not above one and here why this format
      if(err) 
      return console.log("error occurred")
      console.log(code)
      what_to_dodo_after_getting_qr(code)
      return code;
  });
   return stringdata; //? no need?
}

module.exports = {qr}
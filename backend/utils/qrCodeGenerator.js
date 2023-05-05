//const User = require('../models/User');
const QRCode = require('qrcode');

 const qr = (currentID, currentEmail, what_to_dodo_after_getting_qr)=> {
  let data = {
    email:currentEmail,
    id:currentID
  }
  let stringdata = JSON.stringify(data);
  // let getQRCode =  QRCode.toString(stringdata,{type:'terminal'},function (err, QRcode) {
  //     if(err) 
  //     return console.log("error occurred")
  //     console.log(QRcode)
  //     return QRcode // this return gives in a wierd format like 47m...in postman which is not understandable and we had put it in a npm qr code package which gave us error,  so we didnt take this
  // });
  //return getQRCode; // this goes to its parent ie. qr function
  let getCode =  QRCode.toDataURL(stringdata, function (err, code) { //this we are getting in base 64 format and when we copied the content in img src attribite we got the o/p we needed so we selected it
      if(err) 
      return console.log("error occurred")
      console.log(code)
      what_to_dodo_after_getting_qr(code) //here in this line do_after_getting_qr of login.js function is executed. We did it purposely so that what_to_dodo_after_getting_qr function waits to get the code value and then sends the code value to the data parameter in do_after_getting_qr function of login.js and executes it to give us token , data and otp. Our way of resolving the issue
      return code; //returns undefined coz its not a function and does not wait for code value unlike above function
  });
  return getCode; //returns undefined coz its dependent on 'return code' value
}

module.exports = {qr}
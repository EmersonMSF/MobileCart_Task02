import { useState } from "react";
import { useLocation } from "react-router-dom";


const JSON_DATA = JSON.parse(localStorage?.users)
// const JSON_DATA = [
//   {
//     "userDetails": {
//       "id": 0,
//       "username": "Emerson Crash",
//       "dob": "1996-06-18",
//       "role": "admin",
//       "email": "emersoncrash256@gmail.com",
//       "password": "itsmecrash",
//       "re_password": "itsmecrash"
//     },
//     "cartDetails": []
//   }
// ]
export function ValidateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

// export function getActiveUserName() {

//   const currentActiveUser = JSON_DATA.filter((item) => {
//     if (item.userDetails.id === localStorage.activeUser) {
//       console.log("helo here");
//       return item
//     }
//   })
//   return currentActiveUser
// }

export function getActiveUserDetails() {

  const currentActiveUser = JSON_DATA.filter((item) => {
    if (item.userDetails.id === localStorage?.activeUser) {
      return item
    }
  })
  console.log("currentActiveUser", currentActiveUser);

  let obj = currentActiveUser[0].userDetails
  return obj

}

export function getActiveUserProductDetails() {

  const currentActiveUser = JSON_DATA.filter((item) => {
    if (item.userDetails.id === localStorage?.activeUser) {
      return item
    }
  })

  let obj = currentActiveUser[0]?.productDetails
  return obj

}
export function getActiveUserCartDetails() {

  const currentActiveUser = JSON_DATA.filter((item) => {
    if (item.userDetails.id === localStorage?.activeUser) {
      return item
    }
  })

  let obj = currentActiveUser[0]?.cartDetails
  return obj

}

// export function ShowErrorMessage(messageContent) {
//   const [errorMessage, setErrorMessage] = useState({
//     active: false,
//     message: null,
//   });

//   let errorMessageInterval = setInterval(() => {
//     setErrorMessage({
//       ...errorMessage,
//       active: false,
//     });

//     clearInterval(errorMessageInterval);
//   }, 3000);

//   setErrorMessage({
//     active: true,
//     message: messageContent,
//   });
// }

import { useState } from "react";
import { useLocation } from "react-router-dom";





export function ValidateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

// export function GetOrdersForActiveUser() {

//   const location = useLocation()
//   const JSON_DATA = JSON.parse(localStorage.users)

//   JSON_DATA.filter((item) => {
//     if (item.userDetails.id === location.state.id) {

//       //active user

//       if (item.AddOrders.length > 0) {
//         return item.AddOrders
//       } else {
//         return []
//       }

//     }
//   })
// }

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

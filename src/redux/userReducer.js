// const initalState = [
//     {
//         "userDetails": {
//             "username": "Emerson BR",
//             "dob": "2022-06-06",
//             "role": "admin",
//             "email": "emersoncrash256@gmail.com",
//             "password": "itsmecrash",
//             "re_password": "itsmecrash",
//             "id": "UIDl4e5nvxr"
//         },
//         "productDetails": [
//             {
//                 "product_name": "RTX 3080",
//                 "product_type": "Drives & Storage",
//                 "product_price": "31500",
//                 "product_quantity": 10,
//                 "product_id": "PDl4e5qqgo"
//             },
//             {
//                 "product_name": "logitech mk220",
//                 "product_type": "Game Zone",
//                 "product_price": "1500",
//                 "product_quantity": "5",
//                 "product_id": "PDl4e5r8fs"
//             }
//         ],
//         "cartDetails": [
//             {
//                 "userID": "UIDl4e5nvxr",
//                 "orders": {
//                     "product_id": "PDl4e5qqgo",
//                     "product_name": "RTX 3080",
//                     "product_price": "31500",
//                     "product_quantity": 10
//                 },
//                 "order_id": "ODl4e5re80"
//             }
//         ]
//     }
// ]

// const initalState = JSON.parse(localStorage.users)
import { getLocalStorageData } from "../components/HelperFunction"
const initalState = getLocalStorageData()

const user = (state = initalState, action) => {
    switch (action.type) {
        case "GET_USER_DATA":
            return state

        default: return state
    }
}

export default user
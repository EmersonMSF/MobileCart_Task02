const initalState = [
    {
        "userDetails": {
            "id": 0,
            "username": "Emerson Crash",
            "dob": "1996-06-18",
            "role": "admin",
            "email": "emersoncrash256@gmail.com",
            "password": "itsmecrash",
            "re_password": "itsmecrash"
        },
        "AllOrders": [{

        }]
    }
]

const user = (state = initalState, action) => {
    switch (action.type) {
        case "GET_USER_DATA":
            return state

        case "STORE_ORDER_IN_USERDATA":

            return state

        default: return state
    }
}

export default user
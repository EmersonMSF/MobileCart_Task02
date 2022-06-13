// const initalState = [
//     {
//         "userID": 0,
//         "orders": {
//             "product_id": "PDl4843qyx",
//             "product_name": "Nvidia Graphics Card RTX 3050",
//             "product_price": 31500,
//             "product_quantity": 5
//         },
//         "order_id": "ODl4bokpfx"
//     }
// ]


const initalState = []

const order = (state = initalState, action) => {

    switch (action.type) {
        case "STORE_ORDER":
            // const newOrder = {
            //     ...action.payload,
            //     order_id: "OD" + (new Date().getTime()).toString(36)
            // }
            // state.push(newOrder)
            // console.log("orderState", state);
            state = action.payload
            return state

        case "DELETE_ORDER":
            return state.filter((item) => item.order_id !== action.payload)

        // case "SET_INITAL_ORDERS":
        //     console.log("setting inital order", action.payload);
        //     Object.assign(state, action.payload)
        //     console.log(state);

        default: return state
    }
}

export default order
const initalState = [{
    "product_name": "Nvidia Graphics Card RTX 3050",
    "product_type": "Game Zone",
    "product_price": 31500,
    "product_quantity": 10,
    "product_id": "PDl4843qyx"
},
{
    "product_name": "ASUS Gaming Monitor",
    "product_type": "Monitors",
    "product_price": 14500,
    "product_quantity": 20,
    "product_id": "PDl48448mg"
}]
// const initalState = []

const product = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            // const currentPayload = { ...action.payload, product_id: "PD" + Math.random().toString(36).slice(2) }
            const currentPayload = { ...action.payload, product_id: "PD" + (new Date().getTime()).toString(36) }
            state.push(currentPayload)
            return state


        case "DELETE_PRODUCT":
            console.log("delete product reducer");
            console.log(state.filter(item => item.product_id !== action.payload));
            // return Object.assign({}, state, state.map(item => {
            //     return item.product_id !== action.payload
            // }))
            //return state.filter((item) => item.order_id !== action.payload)
            return state.filter((item) => item.product_id !== action.payload)



        case "DECREASE_PRODUCT_QUANTITY_BY_ORDERS":
            const updateState = state.map((item) => {
                if (item.product_id === action.payload.product_id) {


                    console.log("am here", item);
                    // Object.assign({}, item.product_quantity, 5)
                    return { ...item, product_quantity: (item.product_quantity - action.payload.product_quantity) }
                } else return item
            })
            return updateState


        default: return state
    }
}

export default product;
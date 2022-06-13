const initalState = [
    {
        "userID": 0,
        "orders": {
            "product_id": "PDl4843qyx",
            "product_name": "Nvidia Graphics Card RTX 3050",
            "product_price": 31500,
            "product_quantity": 5
        },
        "order_id": "ODl4bokpfx"
    }
]

// const initalState = []

const order = (state = initalState, action) => {

    switch (action.type) {
        case "ORDER_PRODUCT":
            const newOrder = {
                ...action.payload,
                order_id: "OD" + (new Date().getTime()).toString(36)
            }
            state.push(newOrder)
            // console.log("orderState", state);
            return state

        case "DELETE_ORDER":
            return state.filter((item) => item.order_id !== action.payload)

        default: return state
    }
}

export default order
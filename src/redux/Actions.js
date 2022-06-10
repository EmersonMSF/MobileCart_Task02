export const storeProductData = (data) => {
    return {
        type: "ADD_PRODUCT",
        payload: data
    }
}

export const deleteProductData = (id) => {
    // console.log("id" + id);
    return {
        type: "DELETE_PRODUCT",
        payload: id
    }
}

export const decreaseProductQuanitityByOrders = (data) => {
    // console.log("id" + id);
    return {
        type: "DECREASE_PRODUCT_QUANTITY_BY_ORDERS",
        payload: data
    }
}
export const orderProductData = (data) => {
    // console.log("id" + id);
    return {
        type: "ORDER_PRODUCT",
        payload: data
    }
}

export const deleteOrderData = (id) => {
    // console.log("id" + id);
    return {
        type: "DELETE_ORDER",
        payload: id
    }
}
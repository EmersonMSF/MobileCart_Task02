export const storeProductData = (data) => {
    return {
        // type: "ADD_PRODUCT",
        type: "STORE_PRODUCT",
        payload: data
    }
}

export const orderProductData = (data) => {
    return {
        type: "STORE_ORDER",
        payload: data
    }
}

export const getUserData = () => {
    // console.log("id" + id);
    return {
        type: "GET_USER_DATA",
    }
}

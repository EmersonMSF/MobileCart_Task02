const initalState = {
    active: false,
    message: ""
}

const toast = (state = initalState, action) => {
    switch (action.type) {
        case "TOAST_ACTIVE":
            console.log(action.payload);
            return Object.assign(state, action.payload)

        default: return state
    }
}
export default toast
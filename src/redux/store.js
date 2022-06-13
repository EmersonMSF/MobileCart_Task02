import { createStore, combineReducers } from "redux";
import product from "./productReducer"
import order from "./orderReducer";
import user from "./userReducer";

const appReducer = combineReducers(
    {
        product, order, user
    }
)

const store = createStore(appReducer)

export default store
import { createStore, combineReducers } from "redux";
import product from "./productReducer"
import order from "./orderReducer";

const appReducer = combineReducers(
    {
        product, order
    }
)

const store = createStore(appReducer)

export default store
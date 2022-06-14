import { connect } from "react-redux"
import { orderProductData, storeProductData } from "../redux/Actions"
import { useRef, useState } from "react"
const ACTIVE_UID = localStorage.activeUser


function AddToCart(props) {


    const currentSelectedProduct = props.productsDataProp.filter((item) => {
        if (item.product_id == props.product_id) { return item }
    })[0]

    const ACTIVE_UID = localStorage.activeUser
    const JSON_DATA = JSON.parse(localStorage.users)


    const product_quantity = useRef(0)
    const [showRedError, setShowRedError] = useState(false)

    const proccedToBuyBtn = () => {

        if (product_quantity.current.value == null || product_quantity.current.value == "") {
            props.ShowToastMessage("Please enter the product quantity")
            return
        }

        if (showRedError) {
            console.log("red error", props);
            props.ShowToastMessage("You entered more than the availability")
            return
        }

        const orderData = props.ordersDataProp

        const currentOrderData = {
            // userID: JSON.parse(localStorage.users)[0].userDetails.id,
            userID: ACTIVE_UID,
            orders: {
                product_id: currentSelectedProduct.product_id,
                product_name: currentSelectedProduct.product_name,
                product_price: currentSelectedProduct.product_price,
                product_quantity: parseInt(product_quantity.current.value),
            },
            order_id: "OD" + (new Date().getTime()).toString(36)

        }

        orderData.push(currentOrderData)

        props.storeOrder(orderData)

        // props.decreaseOrderCount(currentOrderData.orders)
        decreaseProductCountBasedOnOrder(currentOrderData.orders)

        props.closePopupFunc()
        addOrdersToUserData()

        props.ShowToastMessage("Product added in the cart")
    }

    const decreaseProductCountBasedOnOrder = (data) => {

        const currentProductData = props.productsDataProp
        console.log("currentProductData cart", currentProductData);

        const updateState = currentProductData.map((item) => {
            if (item.product_id === data.product_id) {
                console.log("am here", item);
                // Object.assign({}, item.product_quantity, 5)
                return { ...item, product_quantity: (item.product_quantity - data.product_quantity) }
            } else return item
        })

        console.log("updateState", updateState);

        props.storeProduct(updateState)

        JSON_DATA.filter((item) => {
            if (item.userDetails.id === ACTIVE_UID) {
                item["productDetails"] = updateState
            }
        })

        localStorage.setItem("users", JSON.stringify(JSON_DATA));

    }

    const addOrdersToUserData = () => {


        JSON_DATA.filter((item) => {
            if (item.userDetails.id === ACTIVE_UID) {
                item["cartDetails"] = props.ordersDataProp
            }
        })

        localStorage.setItem("users", JSON.stringify(JSON_DATA));
    }


    return (
        <div className="login_container registration_container updateform_container">
            {/* <div className="top_header"> */}
            <p className="heading">Shopping Cart</p>
            {/* <span>&times;</span> */}
            {/* </div> */}

            <span className="product_item_content">
                <p className="product_type"> {currentSelectedProduct.product_type}</p>
                <p className="product_name">{currentSelectedProduct.product_name}</p>
                <p className="product_price"> <code>&#8377;</code> {currentSelectedProduct.product_price}</p>

                <br />
                <input
                    ref={product_quantity}
                    //value={product_quantity.current.value}
                    onInput={(event) => {
                        if (currentSelectedProduct.product_quantity < event.target.value || event.target.value < 1) {
                            setShowRedError(true)
                        } else {
                            setShowRedError(false)
                        }
                    }}
                    className="product_quantity"
                    type="number"
                    placeholder="Quantity"
                    maxLength={currentSelectedProduct.product_quantity} />
                <p className={showRedError ? "form_error_message active" : "form_error_message"}>You entered more than the availability</p>

            </span>

            <br />
            <button className="btn btn1 proccedToBuyBtn" onClick={proccedToBuyBtn}>Proceed to Buy</button>

        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        productsDataProp: state.product,
        ordersDataProp: state.order
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeOrder: (data) => dispatch(orderProductData(data)),
        storeProduct: (data) => dispatch(storeProductData(data)),
        // decreaseOrderCount: (data) => dispatch(decreaseProductQuanitityByOrders(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);

import { connect } from "react-redux"
import "./AddToCart.css"
import { decreaseProductQuanitityByOrders, orderProductData } from "../../redux/Actions"
import { useRef } from "react"

function AddToCart(props) {

    const currentSelectedProduct = props.productsDataProp.filter((item) => {
        if (item.product_id == props.product_id) { return item }
    })[0]
    console.log("currentSelectedProduct", currentSelectedProduct);

    const product_quantity = useRef(0)

    const proccedToBuyBtn = (props) => {

        const currentOrderData = {
            userID: JSON.parse(localStorage.users)[0].userDetails.id,
            orders: {
                product_id: currentSelectedProduct.product_id,
                product_name: currentSelectedProduct.product_name,
                product_price: currentSelectedProduct.product_price,
                product_quantity: parseInt(product_quantity.current.value),
            }
        }

        props.storeOrder(currentOrderData)

        props.decreaseOrderCount(currentOrderData.orders)
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
                <input ref={product_quantity} className="product_quantity" type="number" placeholder="Quantity" maxLength={currentSelectedProduct.product_quantity} />
                <p className="form_error_message">You entered more than the availability</p>

            </span>

            <br />
            <button className="btn btn1 proccedToBuyBtn" onClick={() => proccedToBuyBtn(props)}>Proceed to Buy</button>

        </div >
    )
}

const mapStateToProps = (state) => {
    // console.log('crash here', state);
    return {
        productsDataProp: state.product
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // storeProduct: (data) => dispatch(storeProductData(data)),
        // deleteProduct: (id) => dispatch(deleteProductData(id))
        storeOrder: (data) => dispatch(orderProductData(data)),
        decreaseOrderCount: (data) => dispatch(decreaseProductQuanitityByOrders(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);

import "./order.css"
import { connect } from "react-redux"
import order from "../../redux/orderReducer"
import { deleteOrderData } from "../../redux/Actions";
import Menu from "../Menu/Menu";

function Order(props) {

    // console.log("props.ordersDataProp", props.ordersDataProp);
    const currentOrderData = props.ordersDataProp
    const placeOrderHandler = (order_id) => {
        props.deleteOrder(order_id)
    }

    return <div>
        <Menu title="Orders" />

        <table className="table_container">
            <tbody>
                <tr>
                    <th>S.No</th>
                    <th>Order ID</th>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Place Order</th>
                </tr>
                {
                    currentOrderData.length > 0 && currentOrderData?.map((item, index) => {

                        console.log("crash here", item.orders);

                        return (

                            <tr key={index} >
                                <td>{index + 1}</td>
                                <td>{item.order_id}</td>
                                <td>{item.orders.product_id}</td>
                                <td>{item.orders.product_name}</td>
                                <td>{item.orders.product_quantity}</td>
                                <td>{(item.orders.product_price * item.orders.product_quantity)}</td>
                                <td><button className="btn btn1 w-120 pad-0" onClick={() => placeOrderHandler(item.order_id)}>Place Order</button></td>
                            </tr>
                        )
                    })
                }

            </tbody>

        </table>

        {currentOrderData.length > 0 ? null : <span className="no_products">No orders yet</span>}

    </div >
}

const mapStateToProps = state => {
    return {
        ordersDataProp: state.order
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteOrder: (id) => dispatch(deleteOrderData(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
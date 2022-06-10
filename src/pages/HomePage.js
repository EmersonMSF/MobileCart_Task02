import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./homePage.css";
import Logout from "../components/Logout";
import UpdateDataForm from "../components/UpdateDataForm";
import AddProductForm from "../components/AddProductForm/AddProductForm";
import Products from "../components/Products/Products";

import { storeProductData } from "../redux/Actions";
import Order from "../components/Orders/Order";
import { connect } from "react-redux";
import order from "../redux/orderReducer";

function HomePage(props) {

  let JSON_DATAJSON_DATA = JSON.parse(localStorage["users"]);

  const location = useLocation();
  const [isLogoutFormOpen, setlogoutFormOpen] = useState(false);
  const [menu, setMenu] = useState("products")


  return (
    <div className="container">

      <div className="sidebar_container">
        <span className="logo">
          <i className="fa-solid fa-atom"></i>
        </span>

        <ul>
          {/* <li >Home</li> */}
          <li onClick={() => setMenu("products")} className={menu === "products" ? "active" : null}>Products</li>
          <li onClick={() => setMenu("cart")} className={menu === "cart" ? "active" : null}>Cart</li>
        </ul>
      </div>

      <div className="homepage_container">
        <div className="top_holder">
          <p className="heading">
            Welcome, <b>{location.state.name} </b>
          </p>

          <span>
            <button className="btn btn2 cart_btn" >
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="count">{props.ordersDataProp.length}</span>
            </button>

            <button className="btn btn2 logout_btn"
              onClick={() => {
                setlogoutFormOpen(true);
              }} >

              <i className="fa-solid fa-power-off"></i>
            </button>

          </span>
        </div>

        {menu == "products" ? <Products /> : null}
        {menu == "cart" ? <Order /> : null}


        {
          isLogoutFormOpen
            ?
            <>
              <div
                className="overlay"
                onClick={() => {
                  setlogoutFormOpen(false);
                }}
              ></div>
              <Logout setlogoutFormOpen={setlogoutFormOpen} />
            </>
            : null
        }

      </div>
    </div >
  );
}

const mapStateToProps = state => {
  return {
    ordersDataProp: state.order
  }
}

// const mapDispatchToProps = dispatch => {
//     return {

//     }
// }

export default connect(mapStateToProps, null)(HomePage)
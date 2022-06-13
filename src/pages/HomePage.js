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
import Menu from "../components/Menu/Menu";
import Home from "../components/Home/Home";

function HomePage(props) {

  let JSON_DATAJSON_DATA = JSON.parse(localStorage["users"]);

  const location = useLocation();
  const [menu, setMenu] = useState("home")


  return (
    <div className="container">

      <div className="sidebar_container">
        <span className="logo">
          <i className="fa-solid fa-atom"></i>
        </span>

        <ul>
          <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : null}>Home</li>
          <li onClick={() => setMenu("products")} className={menu === "products" ? "active" : null}>Products</li>
          <li onClick={() => setMenu("cart")} className={menu === "cart" ? "active" : null}>Cart</li>
        </ul>
      </div>

      <div className="homepage_container">

        {menu === "home" ? <Home /> : null}
        {menu === "products" ? <Products /> : null}
        {menu === "cart" ? <Order /> : null}

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
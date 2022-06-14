import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Logout from "../components/Logout";
import UpdateDataForm from "../components/UpdateDataForm";
import AddProductForm from "../components/AddProductForm";
import Products from "../components/Products";
import { orderProductData } from "../redux/Actions";
import Order from "../components/Order";
import { connect } from "react-redux";
import order from "../redux/orderReducer";
import Home from "../components/Home";
import Menu from "../components/Menu";
import { ToastMessage } from "../components/ToastMessage";

function HomePage(props) {

  const location = useLocation();
  const [menu, setMenu] = useState("products")

  const [toastMessage, setToastMessage] = useState({
    active: false,
    message: null,
  });

  function ShowToastMessage(messageContent) {
    let errorMessageInterval = setInterval(() => {
      setToastMessage({
        ...toastMessage,
        active: false,
      });

      clearInterval(errorMessageInterval);
    }, 3000);

    setToastMessage({
      active: true,
      message: messageContent,
    });

  }

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
        {menu === "products" ? <Products ShowToastMessage={ShowToastMessage} /> : null}
        {menu === "cart" ? <Order ShowToastMessage={ShowToastMessage} /> : null}

      </div>



      <ToastMessage
        message={toastMessage.message}
        activeStatus={toastMessage.active}
      />
    </div >
  );
}

const mapStateToProps = state => {
  return {
    ordersDataProp: state.order
  }
}

const mapDispatchToProps = dispatch => {
  return {
    storeOrder: (data) => dispatch(orderProductData(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
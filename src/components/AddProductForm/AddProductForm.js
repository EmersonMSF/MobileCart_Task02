import { useState } from "react";
import { ToastMessage } from "../ToastMessage/ToastMessage";
import "./AddProductForm.css"
import { connect } from "react-redux"
import { addToastMessage } from "../../redux/Actions";


export default function AddProductForm(props) {

    const productTypes = ["Laptop", "Drives & Storage", "Game Zone", "Monitors", "Desktops"]

    const [productDetails, setProductDetails] = useState({
        product_name: null,
        product_type: productTypes[0],
        product_price: null,
        product_quantity: null
    })

    const addProductHandler = () => {

        if (productDetails.product_name == null || productDetails.product_name == "") {
            // console.log('product name is empty');
            console.log('product name is empty');
            props.ShowToastMessage("Product name is empty")
            return
        }
        else if (productDetails.product_type == null || productDetails.product_type == "") {
            console.log('product type is empty');
            props.ShowToastMessage("Product type is empty")
            return
        }
        else if (productDetails.product_price == null || productDetails.product_price == "") {
            console.log('product price is empty');
            props.ShowToastMessage("Product price is empty")
            return
        }
        else if (productDetails.product_quantity == null || productDetails.product_quantity == "") {
            console.log('product quantity is empty');
            props.ShowToastMessage("Product quantity is empty")
            return
        }


        props.addProductByDataFunc(productDetails)

        props.closePopupFunc()
        props.ShowToastMessage("Product added Successfully")


    }

    return (
        <div className="login_container registration_container updateform_container">
            <p className="heading">Add Product</p>

            <span className="input_elements_holder">
                <label htmlFor="productName">Product Name</label>
                <input
                    autoFocus
                    id="productName"
                    type="text"
                    autoComplete="off"
                    onChange={(event) => setProductDetails((prevProps) => { return { ...prevProps, product_name: event.target.value } })}
                />
            </span>

            <span className="input_elements_holder">
                <label htmlFor="productType">Type</label>
                <select id="productType"
                    onChange={(event) => setProductDetails((prevProps) => { return { ...prevProps, product_type: event.target.value } })} >

                    {productTypes.map((item, index) => {
                        return (
                            <option key={index}>
                                {item}
                            </option>
                        );
                    })}

                </select>
            </span>



            <span className="input_elements_holder">
                <label htmlFor="productPrice">Price</label>
                <input
                    id="productPrice"
                    type="number"
                    autoComplete="off"
                    onChange={(event) => setProductDetails((prevProps) => { return { ...prevProps, product_price: event.target.value } })}
                />
            </span>

            <span className="input_elements_holder">
                <label htmlFor="noOfProductAvailability">Product quantity</label>
                <input
                    id="noOfProductAvailability"
                    type="number"
                    autoComplete="off"
                    onChange={(event) => setProductDetails((prevProps) => { return { ...prevProps, product_quantity: event.target.value } })}
                />
            </span>

            <button className="btn btn1 add_btn" onClick={addProductHandler}>Add</button>

        </div>
    )
}

// const mapStateToProps = (state) => {
//     // console.log('crash here', state);
//     return {
//         toastDataProp: state.toast,
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         addToast: (id) => dispatch(addToastMessage(id))
//     };
// };


// export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm);
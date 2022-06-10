import { useState } from "react";
import "./AddProductForm.css"

export default function AddProductForm(props) {

    const productTypes = ["Laptop", "Drives & Storage", "Game Zone", "Monitors", "Desktops"]

    const [productDetails, setProductDetails] = useState({
        product_name: null,
        product_type: null,
        product_price: null,
        product_quantity: null
    })

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
                <label htmlFor="noOfProductAvailability">No. of items</label>
                <input
                    id="noOfProductAvailability"
                    type="number"
                    autoComplete="off"
                    onChange={(event) => setProductDetails((prevProps) => { return { ...prevProps, product_quantity: event.target.value } })}
                />
            </span>

            <button className="btn btn1 add_btn" onClick={() => props.payloadData(productDetails)}>Add</button>


        </div>
    )
}
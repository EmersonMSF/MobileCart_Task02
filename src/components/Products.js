import { useEffect, useState } from "react"
import AddProductForm from "./AddProductForm"
import AddToCart from "./AddToCart"
import DeleteProduct from "./DeleteProduct"
import { storeProductData, deleteProductData } from "../redux/Actions"
import { connect } from "react-redux"
import Menu from "./Menu"

function Products(props) {

    const [currentProductData, setCurrentProductData] = useState()

    // const productsData = props.productsDataProp

    const ACTIVE_UID = localStorage.activeUser
    const JSON_DATA = JSON.parse(localStorage.users)


    const [isAddToCartOpen, setAddToCardOpen] = useState(false)
    const [isDeleteProductOpen, setDeleteProductOpen] = useState(false)
    const [isAddProductFormOpen, setAddProductFormOpen] = useState(false);

    const [selectedProductID, setSelectedProductID] = useState(null)


    useEffect(() => { setCurrentProductData(props.productsDataProp) }, [props.productsDataProp])


    const openProductFormHandler = () => {
        setAddProductFormOpen(true)
    }

    const openDeleteProductHandler = (id) => {
        setDeleteProductOpen(true)
        setSelectedProductID(id)
    }
    const openAddToCartHandler = (id) => {
        setAddToCardOpen(true)
        setSelectedProductID(id)
    }

    const closeAllPopups = () => {
        console.log('closing');
        setDeleteProductOpen(false)
        setAddProductFormOpen(false)
        setAddToCardOpen(false)
    }



    const deleteProductByID = () => {

        const trimmedProductData = currentProductData.filter((item) => item.product_id !== selectedProductID)
        props.storeProduct(trimmedProductData)

        console.log("trimmedProductData delete", trimmedProductData);
        console.log("props.productsDataProp", props.productsDataProp);

        saveProductDataInLocalStorage(trimmedProductData)

    }

    const addProductByData = data => {

        currentProductData.push({
            ...data,
            product_id: "PD" + (new Date().getTime()).toString(36)
        })
        saveProductDataInLocalStorage(currentProductData)
    }

    const saveProductDataInLocalStorage = (data) => {

        JSON_DATA.filter((item) => {
            if (item.userDetails.id === ACTIVE_UID) {
                // console.log("hi am here", item);
                // item["AddOrders"] = props.ordersDataProp
                item["productDetails"] = data
            }
        })

        localStorage.setItem("users", JSON.stringify(JSON_DATA));
    }

    // {
    //     console.log("props.productsDataProp data", props.productsDataProp);

    //     console.log("currentProductData data", currentProductData);

    // }

    return (
        <>
            <Menu title="Products" />

            <button className="btn btn1 add_product_btn" onClick={openProductFormHandler}>Add Products</button>
            <table className="table_container">
                <tbody>
                    <tr>
                        <th>S.No</th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                        <th>Add To Cart</th>
                    </tr>

                    {
                        currentProductData?.length > 0 && currentProductData?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.product_id}</td>
                                    <td>{item.product_name}</td>
                                    <td>{item.product_type}</td>
                                    <td>{item.product_price}</td>
                                    <td>{item.product_quantity}</td>
                                    <td>
                                        <button className="btn btn1 w-120 pad-0"
                                            onClick={() => openDeleteProductHandler(item.product_id)}>Delete <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn1 w-120 pad-0"
                                            onClick={() => openAddToCartHandler(item.product_id)} > Add to Cart <i className="fa-solid fa-cart-plus"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
            {
                isAddToCartOpen
                    ? <>
                        <div className="overlay" onClick={closeAllPopups}></div>
                        <AddToCart product_id={selectedProductID} closePopupFunc={closeAllPopups} ShowToastMessage={props.ShowToastMessage} />
                    </>
                    : null
            }

            {
                isDeleteProductOpen
                    ? <>
                        <div className="overlay" onClick={closeAllPopups}></div>
                        {/* <DeleteProduct product_id={selectedProductID} deleteProductFunc={props.deleteProduct} closePopupFunc={closeAllPopups} ShowToastMessage={props.ShowToastMessage} /> */}
                        <DeleteProduct deleteFunc={deleteProductByID} closePopupFunc={closeAllPopups} ShowToastMessage={props.ShowToastMessage} />
                    </>
                    : null
            }

            {
                isAddProductFormOpen
                    ? <>
                        <div className="overlay" onClick={closeAllPopups}></div>
                        <AddProductForm addProductByDataFunc={addProductByData} closePopupFunc={closeAllPopups} ShowToastMessage={props.ShowToastMessage} />
                    </>
                    : null
            }

            {currentProductData?.length > 0 ? null : <span className="no_products">No products found</span>}
        </>
    )
}


const mapStateToProps = (state) => {
    // console.log('state here', state.product);
    return {
        productsDataProp: state.product
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeProduct: (data) => dispatch(storeProductData(data)),
        // deleteProduct: (id) => dispatch(deleteProductData(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
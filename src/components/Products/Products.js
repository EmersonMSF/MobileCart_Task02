import { useState } from "react"
import AddProductForm from "../AddProductForm/AddProductForm"
import AddToCart from "../AddToCart/AddToCart"
import DeleteProduct from "../DeleteProduct/DeleteProduct"
import "./Products.css"
import { storeProductData, deleteProductData } from "../../redux/Actions"
import { connect } from "react-redux"

function Products(props) {

    const productsData = props.productsDataProp

    const [isAddToCartOpen, setAddToCardOpen] = useState(false)
    const [isDeleteProductOpen, setDeleteProductOpen] = useState(false)
    const [isAddProductFormOpen, setAddProductFormOpen] = useState(false);

    const [selectedProductID, setSelectedProductID] = useState(null)

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

    return (
        <>
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
                        productsData.length > 0 && productsData?.map((item, index) => {
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
                        <AddToCart product_id={selectedProductID} />
                    </>
                    : null
            }

            {
                isDeleteProductOpen
                    ? <>
                        <div className="overlay" onClick={closeAllPopups}></div>
                        <DeleteProduct product_id={selectedProductID} deleteProductFunc={props.deleteProduct} closePopupFunc={closeAllPopups} />
                    </>
                    : null
            }

            {
                isAddProductFormOpen
                    ? <>
                        <div className="overlay" onClick={closeAllPopups}></div>
                        <AddProductForm payloadData={props.storeProduct} />
                    </>
                    : null
            }

            {productsData.length > 0 ? null : <span className="no_products">No products found</span>}
        </>
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
        storeProduct: (data) => dispatch(storeProductData(data)),
        deleteProduct: (id) => dispatch(deleteProductData(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
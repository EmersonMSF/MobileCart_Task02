import "./DeleteProduct.css"

export default function DeleteProduct(props) {


    const confirmBtnHandler = () => {
        props.deleteProductFunc(props.product_id)
    }


    return <div className="login_container registration_container updateform_container">

        <p className="heading">Are you sure you want to delete this item? </p>

        <div className="delete_action_btns">
            <button className="btn btn2" onClick={props.closePopupFunc}>Cancel</button>
            <button className="btn btn1" onClick={confirmBtnHandler}>Confirm</button>
        </div>

    </div>
}
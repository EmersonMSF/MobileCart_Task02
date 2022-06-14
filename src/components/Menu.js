import { useState } from "react";
import { useLocation } from "react-router-dom";
import Logout from "./Logout";

export default function Menu(props) {
    const [isLogoutFormOpen, setlogoutFormOpen] = useState(false);
    const location = useLocation();


    return <div className="top_holder">
        <p className="heading">
            {props.title}
        </p>

        <span>
            <button className="btn btn2 logout_btn"
                onClick={() => {
                    setlogoutFormOpen(true);
                }} >

                <i className="fa-solid fa-power-off"></i>
            </button>

        </span>

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
}
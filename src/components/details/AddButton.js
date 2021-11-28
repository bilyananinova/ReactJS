import './AddButton.css'
import { Link } from "react-router-dom";

function AddButton() {
    return (
        <Link
            to="#"
            className="add-btn">
            <i className="fas fa-shopping-cart"></i>
                buy
        </Link>
    );
}

export default AddButton;
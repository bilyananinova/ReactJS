import './EditButton.css'
import { Link } from "react-router-dom";

function EditButton(id) {
    return (
        <Link
            to={`/wine-catalog/${id}/edit`}
            className="edit-btn">
            <i className="fas fa-edit"></i>
            edit
        </Link>
    );
}

export default EditButton;
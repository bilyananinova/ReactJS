import "./AdminBtns.css";
import { Link, useHistory } from "react-router-dom";

import { deleteWine } from '../../services/winesServices';

function AdminBtns({ wine }) {
    let history = useHistory();

    function deleteHandler() {
        deleteWine(wine.id);
        history.push('/wine-catalog');
    }

    return (
        <>
            <Link
                to={`/wine-catalog/${wine.id}/edit`}
                className="edit-btn">
                <i className="fas fa-edit"></i>
                edit
            </Link>
            <button
                onClick={deleteHandler}
                className="delete-btn" >
                <i className="fas fa-trash-alt"></i>
                delete
            </button>
        </>
    )
}

export default AdminBtns;
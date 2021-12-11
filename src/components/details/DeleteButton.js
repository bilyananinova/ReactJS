import './DeleteButton.css';
import { useHistory } from "react-router-dom";

import { deleteWine } from '../../services/winesServices';

function DeleteButton({ wine }) {
    let history = useHistory();
    
    function deleteHandler(e) {
        deleteWine(wine.id);
        history.push('/wine-catalog');
    }
    return (
        <button
            onClick={deleteHandler}
            className="delete-btn" >
            <i className="fas fa-trash-alt"></i>
            delete
        </button>
    );
}

export default DeleteButton;
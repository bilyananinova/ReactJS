import './DeleteButton.css';

function DeleteButton({deleteHandler}) {
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
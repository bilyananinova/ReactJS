import './AdminBtns.css';
import { Link, useHistory } from "react-router-dom";

import { deleteArticle } from "../../services/blogServices";

function AdminBtns({ article }) {
    let history = useHistory();

    function deleteHandler() {
        deleteArticle(article.id);
        history.push('/articles');
    }
    return (

        <>
            <section className="article-actions">
                <Link
                    to={`/articles/${article.id}/edit`}
                    className="edit-article-btn">
                    <i className="fas fa-edit"></i>
                edit
            </Link>
                <button
                    onClick={deleteHandler}
                    className="delete-article-btn" >
                    <i className="fas fa-trash-alt"></i> 
                delete
            </button>
            </section>
        </>

    )
}

export default AdminBtns;
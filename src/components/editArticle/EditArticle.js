import "./EditArticle.css";
import React from "react";
import { useHistory } from "react-router-dom";

import { editArticle, getOneArticle } from "../../services/blogServices";

import ErrorMsg from "../error/ErrorMsg";

function EditArticle({ match }) {
    let [article, setArticle] = React.useState({});
    let [error, setError] = React.useState('');
    let history = useHistory();
    let id = match.params.articleId;

    React.useEffect(() => {

        getOneArticle(id)
            .then(article => {
                setArticle({ ...article.data(), id: id });
            })

    }, [id]);

    function editArticleHandler(e) {
        e.preventDefault();

        setError('');
        let title = e.target.title.value;
        let content = e.target.content.value;
        let image = e.target.image.value;

        if (!title || !content || !image) {
            return setError('All fields are required!');
        }

        editArticle(id, title, content, image)
            .then(() => {
                history.push(`/articles/${id}`);
            })
    }

    return (
        <>
            <h3>Edit Article</h3>
            {error ? <ErrorMsg error={error} /> : ""}
            <div className="form-wrapper create-article">
                <section className="form-section edit-article-section">
                    <form className="edit-article-form" onSubmit={(e) => editArticleHandler(e)}>
                        <label htmlFor="article-title">Title<span className="required">*</span></label>
                        <input type="text" className="form-input" id="article-title" name="title" defaultValue={article.title} />
                        <label htmlFor="article-content">Content<span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="article-content" name="content" defaultValue={article.content} />
                        <label htmlFor="article-img">Image<span className="required">*</span></label>
                        <input type="text" className="form-input" id="article-img" name="image" defaultValue={article.image} />
                        <button type="submit" className="edit-article-button" >Edit</button>
                    </form>
                </section>
            </div>
        </>
    )
}

export default EditArticle;
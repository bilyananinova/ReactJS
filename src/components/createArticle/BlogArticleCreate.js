import './BlogArticleCreate.css';
import React from "react";
import { useHistory } from "react-router-dom";

import { createArticle } from "../../services/blogServices";
import UserContext from "../../contexts/UserContext";

import ErrorMsg from "../error/ErrorMsg";

function BlogArticleCreate() {
    let [error, setError] = React.useState('');
    let user = React.useContext(UserContext);
    let history = useHistory();

    function articleHandler(e) {
        e.preventDefault();

        setError('');
        let title = e.target.title.value;
        let content = e.target.content.value;
        let image = e.target.image.value;
        let createdAt = Date.now();
        let creator = user.id;

        if (!title || !content || !image) {
            return setError('All fields are required!');
        }

        createArticle(title, content, image, createdAt, creator)
            .then(() => {
                e.target.reset();
                history.push('/articles');
            })
            .catch(err => {
                setError(err.message);
            })
    }

    return (
        <>
            <h3>Create New Article</h3>
            {error ? <ErrorMsg error={error} /> : ""}
            <div className="form-wrapper create-article">
                <section className="form-section create-article-section">
                    <form className="create-article-form" onSubmit={(e) => articleHandler(e)}>
                        <label htmlFor="article-title">Title<span className="required">*</span></label>
                        <input type="text" className="form-input" id="article-title" name="title" />
                        <label htmlFor="article-content">Content<span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="article-content" name="content"></textarea>
                        <label htmlFor="article-img">Image<span className="required">*</span></label>
                        <input type="text" className="form-input" id="article-img" name="image" />
                        <button type="submit" className="create-article-button" >Create</button>
                    </form>
                </section>
            </div>
        </>
    );
}

export default BlogArticleCreate;
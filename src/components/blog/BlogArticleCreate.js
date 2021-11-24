import './BlogArticleCreate.css';
import React from "react";
import { useHistory } from "react-router-dom";
import { createArticle } from "../../services/blogServices";

function BlogArticleCreate() {
    let history = useHistory();

    function articleHandler(e) {
        e.preventDefault();

        let title = e.target.title.value;
        let content = e.target.content.value;
        let image = e.target.image.value;
        let createdAt = Date.now();

        createArticle(title, content, image, createdAt)
            .then(() => {
                e.target.reset();
                history.push('/articles');
            })
    }

    return (
        <>
            <h3>New Article</h3>
            <div className="form-wrapper create-article">
                <section className="form-section create-article-section">
                    <form className="create-article-form" onSubmit={(e) => articleHandler(e)}>
                        <label htmlFor="article-title">Title<span className="required">*</span></label>
                        <input type="text" className="form-input" id="article-title" name="title" required />
                        <label htmlFor="article-content">Content<span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="article-content" name="content"></textarea>
                        <label htmlFor="article-img">Image<span className="required">*</span></label>
                        <input type="text" className="form-input" id="article-img" name="image" required />
                        <button type="submit" className="create-article-button" >Create</button>
                    </form>
                </section>
            </div>
        </>
    );
}

export default BlogArticleCreate;
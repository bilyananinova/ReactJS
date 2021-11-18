import './BlogArticle.css'
import React from 'react';
import { getOneArticle } from "../services/blogServices";

function BlogArticle({
    match
}) {
    let [article, setArticle] = React.useState([]);

    let id = match.params.articleId;

    React.useEffect(() => {
        getOneArticle(id)
        .then(article => {
            setArticle(article.data())
        })
    }, []);

    return (
        <article class="entry">
            <header class="entry-title">
                <h3>{article.title}</h3>
            </header>
            <section class="entry-media">
                <img src={article.img} />
            </section>
            <section class="entry-content">
                <p>{article.content}</p>
            </section>
        </article>

    );
}

export default BlogArticle;
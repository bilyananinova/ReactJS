import './BlogArticle.css'

import React from 'react';

import { getOneArticle } from "../services/blogServices";

function BlogArticle({ id }) {
    let [article, setArticle] = React.useState([]);

    React.useEffect(() => {
        getOneArticle(id)
        .then(article => {
            setArticle(article.data())
        })
    }, []);

    console.log(article);
    return (
        <article class="entry">
            <header class="entry-title">
                <h2>{article.title}</h2>
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
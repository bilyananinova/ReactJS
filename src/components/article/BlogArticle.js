import './BlogArticle.css'
import React from 'react';
import { getOneArticle } from "../../services/blogServices";

function BlogArticle({
    match
}) {
    let [article, setArticle] = React.useState([]);

    let id = match.params.articleId;

    React.useEffect(() => {
        getOneArticle(id)
            .then(article => {
                setArticle(article.data());
            })
    }, [id]);

    return (
        <article className="blog-article">
            <header className="blog-article-title">
                <h3>{article.title}</h3>
            </header>
            <section className="content">
                <section className="blog-article-media">
                    <img src={article.image} alt={article.title} />
                </section>
                <section className="blog-article-content">
                    {article.content}
                </section>
            </section>
        </article>

    );
}

export default BlogArticle;
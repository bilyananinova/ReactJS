import './Blog.css';

import React from 'react';

import { getAllArticles } from "../services/blogServices";
import BlogArticleCard from '../components/blog/BlogArticleCard';

function Blog() {
    let [articles, setArticles] = React.useState([]);

    React.useEffect(() => {
        getAllArticles()
            .then(articles => {
                setArticles(articles);
            })
    }, [])

    console.log(articles);

    return (
        <>
            <h4>From the blog</h4>
            <section className="blog-wrapper">
                <div className="blog">

                    {articles.map(article =>
                        <BlogArticleCard key={article.id}>{article}</BlogArticleCard>
                    )}

                </div>

            </section>
        </>
    );
}

export default Blog;
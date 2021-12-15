import './Blog.css';
import React from 'react';

import { getAllArticles } from "../../services/blogServices";

import BlogArticleCard from './BlogArticleCard';

function Blog() {
    let [articles, setArticles] = React.useState([]);

    React.useEffect(() => {
        getAllArticles()
            .then(articles => {
                setArticles(articles);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <>
            <h3>From the blog</h3>
            <section className="blog-wrapper">
                <div className="blog">

                    {articles.length > 0
                        ? articles
                            .sort((a, b) => b.createdAt - a.createdAt)
                            .map(a =>
                                <BlogArticleCard key={a.id} article={a} />
                            )
                        : <h1 className="no-content">Sorry, No articles in database...</h1>
                        }

                </div>

            </section>
        </>
    );
}

export default Blog;
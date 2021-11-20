import './Blog.css';
import React from 'react';
import { getAllArticles } from "../../services/blogServices";
import BlogArticleCard from './BlogArticleCard';

function Blog({customRouter}) {
    let [articles, setArticles] = React.useState([]);

    React.useEffect(() => {
        getAllArticles()
            .then(articles => {
                setArticles(articles);
            })
    }, []);

    return (
        <>
            <h3>From the blog</h3>
            <section className="blog-wrapper">
                <div className="blog">

                    {articles.map(a =>
                        <BlogArticleCard key={a.id} article={a} customRouter={customRouter}  />
                    )}

                </div>

            </section>
        </>
    );
}

export default Blog;
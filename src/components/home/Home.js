import './Home.css';
import HomeArticleCard from './HomeArticleCard';
import React from 'react';

import { lastArticles } from '../../services/blogServices';

function Home() {
    let [articles, setArticles] = React.useState([]);

    React.useEffect(() => {
        lastArticles()
            .then(result => {
                setArticles(result);
            })

    }, []);

    return (
        <>
            <section className="home-wrapper">

                <div className="banner">
                    <h2>From the blog</h2>
                </div>
                <section className="last-articles">

                    {articles.map(article =>
                        <HomeArticleCard key={article.id} article={article} />
                    )}

                </section>

            </section>
        </>
    );
}

export default Home;

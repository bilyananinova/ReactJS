import './Home.css';
import React from 'react';

import { lastArticles } from '../../services/blogServices';

import HomeArticleCard from './HomeArticleCard';

function Home() {
    let [articles, setArticles] = React.useState([]);

    React.useEffect(() => {
        lastArticles()
            .then(result => {
                setArticles(result);
            })
            .catch(err => {
                console.error(err);
            });

    }, []);

    return (
        <>
            <section className="home-wrapper">
                <h3>From the blog</h3>
                <section className="last-articles">

                    {articles.length > 0
                        ? articles.map(article =>
                            <HomeArticleCard key={article.id} article={article} />
                        )
                        : <h1 className="no-content">Sorry, No articles in database...</h1>
                    }

                </section>

            </section>
        </>
    );
}

export default Home;

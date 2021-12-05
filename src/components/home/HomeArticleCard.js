import './HomeArticleCard.css';
import { Link } from "react-router-dom";

function HomeArticleCard({ article }) {

    return (
        <>
            <Link to={`/articles/${article.id}`}>
                <section className="home-article">
                    <section className="home-article-image">
                        <img src={article.image} alt={article.title} />
                    </section>
                    <header className="home-article-header">
                        <h6>{article.title}</h6>
                    </header>
                    <section className="home-article-content">
                        <p>{article.content.substring(0, 150)}...</p>
                    </section>
                </section>
            </Link>
        </>
    );
}

export default HomeArticleCard;
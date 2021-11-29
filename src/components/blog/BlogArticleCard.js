import './BlogArticleCard.css';
import { Link } from "react-router-dom";

function BlogArticleCard({ article }) {

    return (
        <article className="blog-article-card">
            <div className="blog-article-card-image">
                <Link to={`/articles/${article.id}`}>
                    <img alt={article.title} src={article.image} />
                </Link>
            </div>
            <header className="blog-article-card-header">
                <h6 className="blog-article-card-title">
                    <Link to={`/articles/${article.id}`} >{article.title}</Link>
                </h6>
            </header>
            <div className="blog-article-card-body">
                <p>
                    {article.content.substring(0, 150)}...
                </p>
            </div>
            <footer className="blog-article-card-footer">
                <Link to={`/articles/${article.id}`} className="read-more">read more</Link>
            </footer>
        </article>

    );
}

export default BlogArticleCard;
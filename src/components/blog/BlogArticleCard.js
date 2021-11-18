import './BlogArticleCard.css';
import { Link } from "react-router-dom";

function BlogArticleCard({article}) {

    return (
        <article className="blog-article">
            <div className="blog-article-image">
                <Link to="{`/articles/${article.id}`}">
                    <img alt="" src={article.img} />
                </Link>
            </div>
            <header className="blog-article-header">
                <h6 className="blog-article-title">
                    <a href="#">{article.title}</a>
                </h6>
            </header>
            <div className="blog-article-body">
                <p>
                    {article.content.substring(0, 150)}...
                </p>
            </div>
            <footer className="blog-article-footer">
                <Link to={`/articles/${article.id}`} className="read-more">read more</Link>
            </footer>
        </article>

    );
}

export default BlogArticleCard;
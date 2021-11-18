import './BlogArticleCard.css';

function BlogArticleCard({article, customRouter}) {

    function detailsClickHandler(e) {
        e.preventDefault();
        customRouter(`/article/${article.id}`)
    };

    return (
        <article className="blog-article">
            <div className="blog-article-image">
                <a href="#">
                    <img alt="" src={article.img} />
                </a>
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
                <a className="read-more" href={`/article/${article.id}`} onClick={detailsClickHandler}>read more</a>
            </footer>
        </article>

    );
}

export default BlogArticleCard;
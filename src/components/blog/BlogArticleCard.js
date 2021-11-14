

function BlogArticleCart(props) {

    let content = props.children.content.split(' ').slice(0, 30).join(' ');

    return (
        <article className="blog-article">
            <a href="#">
                <div className="blog-article-image">
                    <img alt="" src={props.children.img} />
                </div>
            </a>
            <div className="blog-article-body">
                <h6 className="blog-article-title">
                    <a href="#">{props.children.title}</a>
                </h6>
                <p>
                    {content}...    
                <span>
                        <a className="read-more" href="#">read more >> </a>
                    </span></p>


            </div>
        </article>

    );
}

export default BlogArticleCart;
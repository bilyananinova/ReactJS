import './Details.css'

function Details() {
    return (
        <>
            <section className="details-wrapper">
                <section className="details-img">
                    <img src="https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />
                </section>
                <section>
                    <div className="details">
                        <header>
                            <h5>Title</h5>
                        </header>
                        <span className="details-price">20.00$</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, temporibus assumenda provident suscipit quasi voluptate dolores eligendi placeat aliquam nostrum iste molestias nemo sint officia iusto ipsa modi tenetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, temporibus assumenda provident suscipit quasi voluptate dolores eligendi placeat aliquam nostrum iste molestias nemo sint officia iusto ipsa modi tenetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                        <div className="details-action">
                            <a className="add-btn" href="#"><i className="fas fa-shopping-cart"></i>buy</a>
                        </div>
                    </div>
                </section>
            </section>

            <section className="commentSection">
                <h4>Comments</h4>
                <div className="comment">
                    <p><span className="author">Name</span> - <span className="date">10.10.2021</span></p>
                    <p><span className="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span></p>
                </div>
            </section>

            <form className="commentForm">
                <h5>Add a review</h5>
                <label htmlFor="author">From:</label>
                <input type="text" name="author" id="author" value="" />
                <label htmlFor="content">Comment:</label>
                <textarea name="content" id="content" placeholder="Leave a comment..." cols="5" rows="2"></textarea>
                <input type="submit" value="Create comment" />
            </form>
        </>
    )
}

export default Details;
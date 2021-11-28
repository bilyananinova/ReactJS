import './Comments.css';

function Comments() {
    return (
        <section className="commentSection">
            <h5>Comments</h5>
            <div className="comment">
                <p><span className="author">Name</span> - <span className="date">10.10.2021</span></p>
                <p><span className="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span></p>
            </div>
        </section>
    );
}

export default Comments;
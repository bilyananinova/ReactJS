import './Comments.css';
import Comment from "./Comment";

function Comments({ comments }) {

    return (

        <section className="commentSection">
            <h5>Comments</h5>
            {comments?.length > 0
                ? (
                    comments
                        .sort((a, b) => b.createdAt - a.createdAt)
                        .map(c => <Comment key={c.createdAt} comment={c} />)
                )
                : <div className="comment">
                    <p><span className="content">There are no comment yet...</span></p>
                </div>
            }
        </section>
    );
}

export default Comments;
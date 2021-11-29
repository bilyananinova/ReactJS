import './Comments.css';
import Comment from "./Comment";

function Comments(comments) {
    let commentsList = comments;
    
    return (

        <section className="commentSection">
            <h5>Comments</h5>
            {commentsList.comments?.length > 0
                ? (
                    commentsList.comments
                        .map(c => <Comment key={c.createdAt} comment={c} />)
                )
                : <div className="comment">
                    <p><span className="content">There are no comment yet...</span></p>
                </div>}
        </section>
    );
}

export default Comments;
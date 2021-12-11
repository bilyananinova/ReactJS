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
                        .map(c => <Comment key={comments.indexOf(c)} comment={c} />)
                )
                : <div className="comment">
                    <p className="comment-content">There are no comments yet...</p>
                </div>
            }
        </section>
    );
}

export default Comments;
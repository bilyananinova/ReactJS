import "./Comment.css";

function Comment({ comment}) {
    return (
        <div className="comment">
            <p><span className="author">{comment.author}</span> - <span className="date">{new Date(comment.createdAt).toLocaleString()}</span></p>
            <p><span className="content">{comment.content}</span></p>
        </div>
    );
}

export default Comment;
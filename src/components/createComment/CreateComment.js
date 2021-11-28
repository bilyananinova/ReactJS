import './CreateComment.css';

function Comments() {
    return (
        <form className="commentForm">
            <h5>Add a review</h5>
            <label htmlFor="author">From:</label>
            <input type="text" name="author" id="author" defaultValue={'Name'} disabled />
            <label htmlFor="content">Comment:</label>
            <textarea name="content" id="content" placeholder="Leave a comment..." cols="5" rows="2"></textarea>
            <input type="submit" defaultValue="Create comment" />
        </form>
    );
}

export default Comments;
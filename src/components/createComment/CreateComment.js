import './CreateComment.css';
import React from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { createComment } from "../../services/commentsServices";

function Comments({ id }) {
    let user = React.useContext(UserContext);
    let history = useHistory();

    function commentHandler(e) {
        e.preventDefault();
        let author = e.target.author.value;
        let content = e.target.content.value;
        let createdAt = Date.now();

        createComment(id, author, content, createdAt);
        e.target.reset();
    }

    return (

        user.isLoggedIn
            ? < form className="commentForm" onSubmit={(e) => commentHandler(e)} >
                <h5>Add a review</h5>
                <label htmlFor="author">From:</label>
                <input type="text" name="author" id="author" defaultValue={user.currentUser.email} disabled />
                <label htmlFor="content">Comment:</label>
                <textarea name="content" id="content" placeholder="Leave a comment..." cols="5" rows="2" required></textarea>
                <input type="submit" value={"Create comment"} />
            </form >
            : ""

    );
}

export default Comments;
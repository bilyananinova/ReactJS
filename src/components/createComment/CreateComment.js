import './CreateComment.css';
import React from "react";

import { createComment } from "../../services/commentsServices";
import UserContext from "../../contexts/UserContext";

function Comments({ id }) {
    let user = React.useContext(UserContext);
    let [error, setError] = React.useState('');
    let [content, setContent] = React.useState('');

    function commentHandler(e) {
        e.preventDefault();

        if (!content) {
            setError('Please, write your comment');
        } else {
            setError('');
            createComment(id, user?.name, content, Date.now(), user?.id);
            e.target.reset();
        }
    }

    return (

        user?.isLogged
            ? < form className="commentForm" onSubmit={(e) => commentHandler(e)} >
                <h5>Add a review</h5>
                <label htmlFor="author">From:</label>
                <input type="text" name="author" id="author" defaultValue={user?.name} disabled />
                <label htmlFor="content">Comment:</label>
                <textarea name="content" id="content" placeholder="Leave a comment..." cols="5" rows="2" onBlur={e => setContent(e.target.value)} />
                {Boolean(error) ? <span>{error}</span> : ''}
                <input type="submit" value={"Create comment"} />
            </form >
            : ""

    );
}

export default Comments;
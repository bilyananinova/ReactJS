import './CreateComment.css';
import React from "react";

import { createComment } from "../../services/commentsServices";
import UserContext from "../../contexts/UserContext";

function Comments({ id }) {
    let user = React.useContext(UserContext);
    let [author, setAuthor] = React.useState(user.name);
    let [content, setContent] = React.useState('');
    let [createdAt, setCreatedAt] = React.useState(Date.now());
    let [creator, setCreator] = React.useState(user.id);

    function commentHandler(e) {
        e.preventDefault();
        
        createComment(id, author, content, createdAt, creator);
        e.target.reset();
    }

    return (

        user?.isLogged
            ? < form className="commentForm" onSubmit={(e) => commentHandler(e)} >
                <h5>Add a review</h5>
                <label htmlFor="author">From:</label>
                <input type="text" name="author" id="author" defaultValue={user.name} disabled />
                <label htmlFor="content">Comment:</label>
                <textarea name="content" id="content" placeholder="Leave a comment..." cols="5" rows="2" onChange={e => setContent(e.target.value)}/>
                <input type="submit" value={"Create comment"} />
            </form >
            : ""

    );
}

export default Comments;
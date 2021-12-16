
import { like, dislike } from "../../services/likeServices";

function LikeButton({ wine, userId }) {
    function likeWine(e) {
        e.preventDefault();
        like(wine.id, userId);
    }

    function dislikeWine(e) {
        e.preventDefault();
        dislike(wine.id, userId);
    }

    return (
        <>
            { !wine.likes?.includes(userId)
                ?
                <button className="like-btn" onClick={(e) => likeWine(e)}><i className="fas fa-thumbs-up"></i><span>{wine.likes?.length || 0}</span></button>
                :
                <button className="dislike-btn" onClick={(e) => dislikeWine(e)}><i className="fas fa-thumbs-down"></i><span>{wine.likes?.length || 0}</span></button>
            }
        </>
    )
}

export default LikeButton;
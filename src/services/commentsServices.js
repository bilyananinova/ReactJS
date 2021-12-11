import { doc, updateDoc, arrayUnion, getDoc} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function createComment(id, author, content, createdAt, creator) {
    let wineRef = doc(db, "wines", id)

    return updateDoc(wineRef, {
        comments: arrayUnion({
            author,
            content,
            createdAt,
            creator
        })
    })
}

export {
    createComment
}
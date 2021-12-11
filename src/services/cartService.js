import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function addCart(id, title, price, image) {
    let userRef = doc(db, "users", id)
    return updateDoc(userRef, {
        cart: arrayUnion({
            title,
            price,
            image
        })
    })
}

export {
    addCart
}
import { doc, updateDoc, arrayUnion, arrayRemove, query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function like(wineId, userId) {
    let userRef = doc(db, "users", userId);
    let wineRef = doc(db, "wines", wineId);

    updateDoc(userRef, {
        likes: arrayUnion(wineId)
    });

    updateDoc(wineRef, {
        likes: arrayUnion(userId)
    });
}

function dislike(wineId, userId) {
    let userRef = doc(db, "users", userId);
    let wineRef = doc(db, "wines", wineId);

    updateDoc(userRef, {
        likes: arrayRemove(wineId)
    });

    updateDoc(wineRef, {
        likes: arrayRemove(userId)
    });
}

function getLikes(userId) {
    let winesRef = collection(db, 'wines');
    let q = query(winesRef, where('likes', 'array-contains', userId));

    return getDocs(q)
        .then((snapshot) => {
            let wines = [];
            snapshot.docs.forEach((doc) => {
                wines.push({ ...doc.data(), id: doc.id })
            });
            return wines;
        })
        .catch(err => {
            console.error(err);
            throw err;
        });
}

export {
    like,
    dislike,
    getLikes
}
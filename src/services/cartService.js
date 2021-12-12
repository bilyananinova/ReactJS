import { setDoc, doc, collection, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function addCart(wine, userId) {
    return setDoc(doc(db, `cart ${userId}`, wine.id), {
        wine
    })
        .then(wine => {
            console.log('successfully added to cart');
            return wine
        })
        .catch(err => {
            console.error(err);
        })
}

function getUserCart(userId) {
    let cartRef = collection(db, `cart ${userId}`);

    return getDocs(cartRef)
        .then((snapshot) => {
            let cart = [];
            snapshot.docs.forEach((doc) => {
                cart.push({ ...doc.data() })
            });

            return cart;
        })
        .catch(err => {
            console.error(err);
            throw err;
        });
}

function updateCart(wineId, userId, wine) {
    let cartRef = doc(db, `cart ${userId}`, wineId);

    return updateDoc(cartRef, {
        wine
    })
        .catch(err => {
            console.error(err);
            throw err;
        })
}

function deleteFromCart(userId, wineId) {
    let cartRef = doc(db, `cart ${userId}`, wineId);
    return deleteDoc(cartRef);
}

export {
    addCart,
    getUserCart,
    updateCart,
    deleteFromCart
}
import { getDocs, collection, doc, getDoc, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

let winesRef = collection(db, 'wines');

function getAllWines() {

    return getDocs(winesRef)
        .then((snapshot) => {
            let wines = [];
            snapshot.docs.forEach((doc) => {
                wines.push({ ...doc.data(), id: doc.id })
            });

            return wines;
        })
        .catch(err => {
            console.error(err);
        });

}

function getOne(id) {
    let wineRef = doc(db, 'wines', id);
    return getDoc(wineRef);
}

function createProduct(title, description, price, type, image, createdAt) {
    return addDoc(winesRef, { title, description, price, type, image, createdAt })
        .then(wine => {
            return wine
        })
}

function editProduct(wineId, title, description, price, type, image) {
    let wineRef = doc(db, 'wines', wineId);
    console.log(title);
    return updateDoc(wineRef, {
        title,
        description,
        price,
        type,
        image
    })
    .then(result => {
        console.log(result);
    })
}

export {
    getAllWines,
    getOne,
    createProduct,
    editProduct
}
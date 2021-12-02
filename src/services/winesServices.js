import { collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

let winesRef = collection(db, 'wines');

function getAllWines(setWines) {

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

    // onSnapshot(winesRef, (snapshot) => {
    //     let wines = [];
    //     snapshot.docs.forEach((doc) => {
    //         wines.push({ ...doc.data(), id: doc.id })
    //     });

    //     setWines(wines)
    // });
}

function getOne(id) {
    let wineRef = doc(db, 'wines', id);
    return getDoc(wineRef)
}

function createWine(title, description, price, category, image, createdAt) {
    return addDoc(winesRef, { title, description, price, category, image, createdAt })
        .then(wine => {
            return wine
        })
}

function editWine(wineId, title, description, price, category, image) {
    let wineRef = doc(db, 'wines', wineId);

    return updateDoc(wineRef, {
        title,
        description,
        price,
        category,
        image
    })
        .then(result => {
            return result
        })
        .catch(err => {
            console.error(err);
        })
}

function deleteWine(wineId) {
    let wineRef = doc(db, 'wines', wineId)
    return deleteDoc(wineRef);
}

export {
    getAllWines,
    getOne,
    createWine,
    editWine,
    deleteWine
}
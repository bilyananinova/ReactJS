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
            throw err;
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

function createWine(title, description, price, category, image, createdAt, creator) {
    return addDoc(winesRef, { title, description, price, category, image, createdAt, creator, comments: [] })
        .then(wine => {
            return wine
        })
        .catch(err => {
            console.error(err);
            throw err;
        });
}

function editWine(wineId, title, description, price, image) {
    let wineRef = doc(db, 'wines', wineId);

    return updateDoc(wineRef, {
        id: wineId,
        title,
        description,
        price,
        image
    })
        .then(result => {
            return result
        })
        .catch(err => {
            console.error(err);
            throw err;
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
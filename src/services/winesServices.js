import { getDocs, collection, getFirestore, doc, getDoc } from "firebase/firestore";

let db = getFirestore();

function getAllWines() {
    let winesRef = collection(db, 'wines');

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

export {
    getAllWines,
    getOne
}
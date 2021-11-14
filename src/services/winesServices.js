import { getDocs, collection , getFirestore } from "firebase/firestore";

let db = getFirestore();
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

export {
    getAllWines,
}
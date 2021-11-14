import { getDocs, collection , getFirestore } from "firebase/firestore";

let db = getFirestore();
let articlesRef = collection(db, 'articles');

function getAllArticles() {
    
    return getDocs(articlesRef)
    .then((snapshot) => {
            let articles = [];
            snapshot.docs.forEach((doc) => {
                articles.push({ ...doc.data(), id: doc.id })
            });

            return articles;
        })
        .catch(err => {
            console.error(err);
        });

}

export {
    getAllArticles,
}
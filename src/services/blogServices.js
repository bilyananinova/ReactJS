import { getDocs, collection , getFirestore, doc, getDoc } from "firebase/firestore";

let db = getFirestore();

function getAllArticles() {
    let articlesRef = collection(db, 'articles');
    
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

function getOneArticle(id) {
    let articleRef = doc(db, 'articles', id);
    return getDoc(articleRef);
}

export {
    getAllArticles,
    getOneArticle
}
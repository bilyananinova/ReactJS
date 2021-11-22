import { getDocs, collection, getFirestore, doc, getDoc, addDoc } from "firebase/firestore";

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

function getOneArticle(id) {
    let articleRef = doc(db, 'articles', id);
    return getDoc(articleRef);
}

function createArticle(title, content, image, date) {
    return addDoc(articlesRef, { title, content, image, date })
        .then(article => {
            return article;
        })
}

export {
    getAllArticles,
    getOneArticle,
    createArticle
}
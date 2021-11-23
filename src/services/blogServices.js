import { getDocs, collection, doc, getDoc, addDoc, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

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

function createArticle(title, content, image, createdAt) {
    return addDoc(articlesRef, { title, content, image, createdAt })
        .then(article => {
            return article;
        })
}

function lastArticles() {
    let params = query(articlesRef, orderBy('createdAt', 'desc'), limit(3))
    return getDocs(params)
        .then((snapshot) => {
            let lastArticles = [];
            snapshot.docs.forEach((doc) => {
                lastArticles.push({ ...doc.data(), id: doc.id })
            });

            return lastArticles;
        })
        .catch(err => {
            console.error(err);
        });

}

export {
    getAllArticles,
    getOneArticle,
    createArticle,
    lastArticles
}
import { getDocs, collection, doc, getDoc, addDoc, query, orderBy, limit, deleteDoc, updateDoc } from "firebase/firestore";
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
            throw err;
        });

}

function getOneArticle(id) {
    let articleRef = doc(db, 'articles', id);
    return getDoc(articleRef);
}

function createArticle(title, content, image, createdAt, creator) {
    return addDoc(articlesRef, { title, content, image, createdAt, creator })
        .then(article => {
            return article;
        })
        .catch(err => {
            console.error(err);
            throw err;
        });
}

function editArticle(articleId, title, content, image) {
    let articleRef = doc(db, 'articles', articleId);

    return updateDoc(articleRef, {
        id: articleId,
        title,
        content,
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

function deleteArticle(articleId) {
    let articleRef = doc(db, 'articles', articleId);
    return deleteDoc(articleRef);
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
            throw err;
        });

}

export {
    getAllArticles,
    getOneArticle,
    createArticle,
    editArticle,
    deleteArticle,
    lastArticles
}
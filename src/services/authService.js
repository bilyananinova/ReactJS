import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";

function register(name, email, password) {

    return createUserWithEmailAndPassword(auth, email, password)
        .then(cred => {
            if (cred) {
                cred.user.displayName = name;

                setDoc(doc(db, "users", cred.user.uid), {
                    name: cred.user.displayName,
                    email: cred.user.email,
                    cart: []
                });

                return cred.user.currentUser
            } else {
                throw new Error('Wrong username or password');
            }
        })
        .catch(err => {
            console.error(err.message);
            throw new Error('Wrong username or password');
        })
}

function login(email, password) {

    return signInWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
            if (userCred) {
                return userCred.user.currentUser
            } else {
                throw new Error('Wrong email or password');
            }
        })
        .catch(err => {
            console.error(err.message);
            throw new Error('Wrong email or password');
        })
}

function logout() {
    signOut(auth)
}

function getUser(userId) {
    let userRef = doc(db, "users", userId);
    let user = getDoc(userRef);
    return user;
}

export {
    register,
    login,
    logout,
    getUser
}
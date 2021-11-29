import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";

function register(name, email, password, rePassword) {

    if (name === '' || email === '' || password === '') {
        throw new Error('All fields are required')
    }

    if (password.length < 6) {
        throw new Error('Password must be at least 6 characters long')
    }

    if (password !== rePassword) {
        throw new Error('Password missmatch!')
    }

    return createUserWithEmailAndPassword(auth, email, password)
        .then(cred => {
            cred.user.displayName = name;

            setDoc(doc(db, "users", cred.user.uid), {
                displayName: cred.user.displayName,
                email: cred.user.email,
                cart: []
            });
            
            return cred.user.currentUser
        })
        .catch(err => {
            console.error(err.message);
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
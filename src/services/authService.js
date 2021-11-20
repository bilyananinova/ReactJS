import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
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
                name: cred.user.displayName,
                email: cred.user.email,
                cart: []
            });

            return cred.user
        })
        .catch(err => {
            console.error(err.message);
        })
}

function login(email, password) {

    return signInWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
            if (userCred) {
                return userCred.user
            } else {
                throw new Error('Wrong email or password');
            }
        })
        .catch(err => {
            console.error(err.message);
        })
}

export {
    register,
    login
}
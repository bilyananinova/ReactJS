import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDrzYwanSFfhlY9GvdTWHPDlJ_ZOvUUqEI",
    authDomain: "wine-store2.firebaseapp.com",
    projectId: "wine-store2",
    storageBucket: "wine-store2.appspot.com",
    messagingSenderId: "615173989294",
    appId: "1:615173989294:web:025d212054caf2e3939e3f"
};

// init firebase app
initializeApp(firebaseConfig);

export let db = getFirestore();
export let auth = getAuth();
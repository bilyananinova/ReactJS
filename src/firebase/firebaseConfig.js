import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBJnL_xJ_-0EWpom0SJed4Wfveb_MDxKxc",
    authDomain: "wine-store-bb07d.firebaseapp.com",
    projectId: "wine-store-bb07d",
    storageBucket: "wine-store-bb07d.appspot.com",
    messagingSenderId: "286817091570",
    appId: "1:286817091570:web:94cd2955f688c12c9ab56b"
  };

// init firebase app
initializeApp(firebaseConfig);

export let db = getFirestore();
export let auth = getAuth();
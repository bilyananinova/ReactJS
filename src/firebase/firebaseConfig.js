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

// const firebaseConfig = {
//   apiKey: "AIzaSyDIygk8ZX8EaqaE0g22isu9c951UeooWqU",
//   authDomain: "wine-bd853.firebaseapp.com",
//   databaseURL: "https://wine-bd853-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "wine-bd853",
//   storageBucket: "wine-bd853.appspot.com",
//   messagingSenderId: "63550275145",
//   appId: "1:63550275145:web:c4332b75bc6dd55b138998"
// };

// init firebase app
initializeApp(firebaseConfig);

export let db = getFirestore();
export let auth = getAuth();
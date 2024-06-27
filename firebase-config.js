// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASGDs7Ik8C9tJW-A1sRRmCfocnjUD1m9k",
  authDomain: "myprojectrmc.firebaseapp.com",
  databaseURL: "https://myprojectrmc-default-rtdb.firebaseio.com",
  projectId: "myprojectrmc",
  storageBucket: "myprojectrmc.appspot.com",
  messagingSenderId: "472915269406",
  appId: "1:472915269406:web:d029978505be294c4f1b0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage};

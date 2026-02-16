import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC9FOYAUkjD5eXmKsugxczLnQcNdt61ixM",
    authDomain: "calculatorbisnis-1210d.firebaseapp.com",
    projectId: "calculatorbisnis-1210d",
    storageBucket: "calculatorbisnis-1210d.firebasestorage.app",
    messagingSenderId: "67062921896",
    appId: "1:67062921896:web:2cda820d0825179397609d",
    measurementId: "G-TWS9WERLE0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const APP_ID = 'calculatorbisnis-pro'; // Legacy ID usage

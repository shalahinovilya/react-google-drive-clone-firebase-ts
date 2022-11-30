import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCAFdKJhOczq_6GIdj1vQ61nJKwkz07Nek",
    authDomain: "drive-project-24583.firebaseapp.com",
    projectId: "drive-project-24583",
    storageBucket: "drive-project-24583.appspot.com",
    messagingSenderId: "987933207382",
    appId: "1:987933207382:web:776ae430583e2f6f93c4f7",
    measurementId: "G-F5VW3E0Q6Z"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
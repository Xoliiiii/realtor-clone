// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-DI5kiQH3KtcBQ4lwwhB3n7cLm0BauVs",
  authDomain: "realtorclone-f6734.firebaseapp.com",
  projectId: "realtorclone-f6734",
  storageBucket: "realtorclone-f6734.appspot.com",
  messagingSenderId: "819504323692",
  appId: "1:819504323692:web:09e956073ecbf0b39f4c49"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()


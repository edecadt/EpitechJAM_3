// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1GLx3xS7n6rBdv-U7jTQ7zG6cDOfkPMg",
  authDomain: "firealert-745be.firebaseapp.com",
  projectId: "firealert-745be",
  storageBucket: "firealert-745be.appspot.com",
  messagingSenderId: "109533544220",
  appId: "1:109533544220:web:16de77a24e4e3be77c44d9",
  measurementId: "G-2JEME420BR",
  databaseURL:
    "https://firealert-745be-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const usersRef = collection(db, "users");

export const database = getDatabase(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACqe6LrBQZCK_xDSlW_HrTG5ONoDvHZYY",
  authDomain: "journal-c94ad.firebaseapp.com",
  projectId: "journal-c94ad",
  storageBucket: "journal-c94ad.appspot.com",
  messagingSenderId: "497690107022",
  appId: "1:497690107022:web:a8ec65c37f79040ae1bddf",
  measurementId: "G-PTTPD9HLC7"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
export const analytics = getAnalytics(FirebaseApp)
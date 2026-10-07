// Import the functions you need from the SDKs you need
 import { initializeApp } from 'firebase/app'
 import { getFirestore } from 'firebase/firestore'
 import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNDNej9Fk-5EPV_Zpudfbgr3HasTU1LCg",
  authDomain: "my-react-app-dac43.firebaseapp.com",
  projectId: "my-react-app-dac43",
  storageBucket: "my-react-app-dac43.firebasestorage.app",
  messagingSenderId: "964242098060",
  appId: "1:964242098060:web:b7a6a0d9a91988de6eb8a9",
  measurementId: "G-3PDXT2W8JK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }

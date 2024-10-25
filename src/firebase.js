// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: proces.env.FIREBASE_API_KEY,
  authDomain: "jimneys-resturant.firebaseapp.com",
  databaseURL: "https://jimneys-resturant-default-rtdb.firebaseio.com",
  projectId: "jimneys-resturant",
  storageBucket: "jimneys-resturant.appspot.com",
  messagingSenderId: "952040030755",
  appId: "1:952040030755:web:45ce1a09110ac4f4d26796"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
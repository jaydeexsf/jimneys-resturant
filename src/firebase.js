import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
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
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };

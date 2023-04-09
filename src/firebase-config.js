import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHDBvSCKpalIMUefv03xP_ekxy1NuXvfs",
  authDomain: "userauth-683c4.firebaseapp.com",
  projectId: "userauth-683c4",
  storageBucket: "userauth-683c4.appspot.com",
  messagingSenderId: "966462977712",
  appId: "1:966462977712:web:1eda051997867700fd6d75",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

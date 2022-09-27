// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvfx-RNGIIFTLdRmMXt6a5-scLy1bnSPY",
  authDomain: "travel-agency-7df49.firebaseapp.com",
  projectId: "travel-agency-7df49",
  storageBucket: "travel-agency-7df49.appspot.com",
  messagingSenderId: "455459874097",
  appId: "1:455459874097:web:27a239c9f58d62a0283c10",
  measurementId: "G-NJS8Z5Z575"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
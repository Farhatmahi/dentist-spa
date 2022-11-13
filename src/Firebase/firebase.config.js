// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCegTIY3uBlrpQsETCzhWL8PV1xUnlBo5E",
  authDomain: "dentist-spa.firebaseapp.com",
  projectId: "dentist-spa",
  storageBucket: "dentist-spa.appspot.com",
  messagingSenderId: "1082235229257",
  appId: "1:1082235229257:web:aaa5f44c89a0adf1c21b98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
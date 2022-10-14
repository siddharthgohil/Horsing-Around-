import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDVB42bG-OKxJIsYlO10BB2egRFcvjJFsw",
  authDomain: "horsing-around-5f7da.firebaseapp.com",
  projectId: "horsing-around-5f7da",
  storageBucket: "horsing-around-5f7da.appspot.com",
  messagingSenderId: "965369767546",
  appId: "1:965369767546:web:4a111266a467cb66ad7dc3",
  measurementId: "G-6Y9YE82WG4",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

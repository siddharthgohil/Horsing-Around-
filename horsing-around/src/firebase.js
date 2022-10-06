import {initializeApp} from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyCgRA_CUSfWK-w-4IQMDsm9t-AP-IQeb6g",
    authDomain: "horsing-around-daa95.firebaseapp.com",
    projectId: "horsing-around-daa95",
    storageBucket: "horsing-around-daa95.appspot.com",
    messagingSenderId: "84079501645",
    appId: "1:84079501645:web:965d800a166bd1418fd704",
    measurementId: "G-BEGEQ62HRB"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  export default firebaseApp;

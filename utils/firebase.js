import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAQU9nqIESCRw7enYhd_KeDHSb221e2fRg",
    authDomain: "findyourlook-5c282.firebaseapp.com",
    projectId: "findyourlook-5c282",
    storageBucket: "findyourlook-5c282.appspot.com",
    messagingSenderId: "12436765376",
    appId: "1:12436765376:web:6402dbcc0c26b2e1040b25"
  };
  
  // Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


    const firebaseConfig = {
        apiKey: "AIzaSyBIQBdrMP_l7tKp-Q4RLtdy7AFaP2km9r4",
        authDomain: "vezeeta-a2089.firebaseapp.com",
        projectId: "vezeeta-a2089",
        storageBucket: "vezeeta-a2089.appspot.com",
        messagingSenderId: "467322917635",
        appId: "1:467322917635:web:75dd78140b930e67838f36"
      };
      


firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
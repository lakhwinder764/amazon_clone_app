import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDctYPc0cVl6b15emQ87BSieSt3khJUzPE",
    authDomain: "clone-app-75e36.firebaseapp.com",
    projectId: "clone-app-75e36",
    storageBucket: "clone-app-75e36.appspot.com",
    messagingSenderId: "87595884559",
    appId: "1:87595884559:web:b35db8755021042f39837a",
    measurementId: "G-YLZTP6GTT3"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth}
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA0ThwTypau1yzc-jX7qYS1s0QTNI0GiO0",
  authDomain: "clone-3d080.firebaseapp.com",
  databaseURL: "https://clone-3d080.firebaseio.com",
  projectId: "clone-3d080",
  storageBucket: "clone-3d080.appspot.com",
  messagingSenderId: "353991336974",
  appId: "1:353991336974:web:2ba87fa5c0c0f20df1485f",
  measurementId: "G-GRCSLYV7KL",
});


const auth = firebase.auth();

export {  auth };

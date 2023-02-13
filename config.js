import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBKJkTzJPh-T_79XLGWdxagAeQR2nNpsZQ",
  authDomain: "e-ride-a53ea.firebaseapp.com",
  projectId: "e-ride-a53ea",
  storageBucket: "e-ride-a53ea.appspot.com",
  messagingSenderId: "808284902790",
  appId: "1:808284902790:web:41c60dc4d5d94739044807"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

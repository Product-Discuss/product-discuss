import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk5Ys0Z026pbDqabddXYCD86dZUVkvaRU",
  authDomain: "product-discuss.firebaseapp.com",
  projectId: "product-discuss",
  storageBucket: "product-discuss.appspot.com",
  messagingSenderId: "363374770056",
  appId: "1:363374770056:web:d55d8f353e18bf20bd2c3d",
  measurementId: "G-5FJ8XJ2EWJ",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
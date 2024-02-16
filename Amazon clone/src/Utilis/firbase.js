
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import  "firebase/compat/firestore"
import "firebase/compat/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDYBPVVpOX-hu2JA6G96YV6pDVltupMwg0",
  authDomain: "clone-cc651.firebaseapp.com",
  projectId: "clone-cc651",
  storageBucket: "clone-cc651.appspot.com",
  messagingSenderId: "981442827958",
  appId: "1:981442827958:web:621cdb610dd4e9a23d7817"
};
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
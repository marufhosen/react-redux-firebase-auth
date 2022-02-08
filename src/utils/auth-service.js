// import firebase from "firebase/app";
import firebaseConfig from "./firebase.config";
// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3DsCdzToI_gZFprddFDlCBVkalhiz-fw",
  authDomain: "clone-bee93.firebaseapp.com",
  projectId: "clone-bee93",
  storageBucket: "clone-bee93.firebasestorage.app",
  messagingSenderId: "182041249468",
  appId: "1:182041249468:web:5262550a9bc781e1b3b2b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
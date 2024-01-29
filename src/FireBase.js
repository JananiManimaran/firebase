// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Zr7q1lwnOj2QkhY04j-lgXD1jTQiNSM",
  authDomain: "demoproject-d117e.firebaseapp.com",
  databaseURL: "https://demoproject-d117e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "demoproject-d117e",
  storageBucket: "demoproject-d117e.appspot.com",
  messagingSenderId: "776489425639",
  appId: "1:776489425639:web:915ae1cf3b393a291da042"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
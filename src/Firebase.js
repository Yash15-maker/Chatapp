// // Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// // TODO: Add SDKs for Firebase products that you want to use

// const firebaseConfig = {
//   apiKey: "AIzaSyCdZ0WccYImpCyhp3zrGxhXz-UJMZ0FaB4",
//   authDomain: "chatapp-14f15.firebaseapp.com",
//   projectId: "chatapp-14f15",
//   storageBucket: "chatapp-14f15.appspot.com",
//   messagingSenderId: "357313177168",
//   appId: "1:357313177168:web:b9b54c0b357bc8d7ce5355",
//   measurementId: "G-FNDRFJ9HV5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db=fire




import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCdZ0WccYImpCyhp3zrGxhXz-UJMZ0FaB4",
  authDomain: "chatapp-14f15.firebaseapp.com",
  projectId: "chatapp-14f15",
  storageBucket: "chatapp-14f15.appspot.com",
  messagingSenderId: "357313177168",
  appId: "1:357313177168:web:b9b54c0b357bc8d7ce5355",
  measurementId: "G-FNDRFJ9HV5"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
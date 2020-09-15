import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDI7YKCBEfAoRwAeoK2_VlJn7CzOusW1R8",
  authDomain: "score-1007.firebaseapp.com",
  databaseURL: "https://score-1007.firebaseio.com",
  projectId: "score-1007",
  storageBucket: "score-1007.appspot.com",
  messagingSenderId: "719089485173",
  appId: "1:719089485173:web:9a622a6f9a389664797f3c"
});

const db = firebaseApp.firestore();

export default { db };
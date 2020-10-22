import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBIoW4AucpBM1WRgOstlmv2iMlknVvy-7k",
  authDomain: "booksanta-1b0ff.firebaseapp.com",
  databaseURL: "https://booksanta-1b0ff.firebaseio.com",
  projectId: "booksanta-1b0ff",
  storageBucket: "booksanta-1b0ff.appspot.com",
  messagingSenderId: "1054746489053",
  appId: "1:1054746489053:web:753a65ab7491e6ccc2ab34"
};
 //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
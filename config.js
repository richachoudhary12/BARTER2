import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBeSgaH2oYz4H7FQzj_MbRqCJSwmG5XK6M",
  authDomain: "barter-fun.firebaseapp.com",
  databaseURL: "https://barter-fun.firebaseio.com",
  projectId: "barter-fun",
  storageBucket: "barter-fun.appspot.com",
  messagingSenderId: "190855199563",
  appId: "1:190855199563:web:4f51cd0bdc9f4448e486ce"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

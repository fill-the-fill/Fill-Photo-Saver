import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyALvGBLcuw8aAGu8BzENyKHnI-Vf1KsCDs",
    authDomain: "fillsaver-51dcd.firebaseapp.com",
    databaseURL: "https://fillsaver-51dcd.firebaseio.com",
    projectId: "fillsaver-51dcd",
    storageBucket: "fillsaver-51dcd.appspot.com",
    messagingSenderId: "877159614934",
    appId: "1:877159614934:web:c8f135c46ff1b546377c77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp};
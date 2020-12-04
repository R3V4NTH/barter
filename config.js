import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBInGuThnXUS-KMMkRn2mEbritXoVpUw2o",
  authDomain: "bartersystem-fe1b3.firebaseapp.com",
  databaseURL: "https://bartersystem-fe1b3.firebaseio.com",
  projectId: "bartersystem-fe1b3",
  storageBucket: "bartersystem-fe1b3.appspot.com",
  messagingSenderId: "658946828672",
  appId: "1:658946828672:web:ac7883d1fdf3d58615b965"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

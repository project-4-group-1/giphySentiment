import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBPwSB-EAAXs-M5eqE4HZywKi1_Et_GO_A',
  authDomain: 'project-4-8e199.firebaseapp.com',
  projectId: 'project-4-8e199',
  storageBucket: 'project-4-8e199.appspot.com',
  messagingSenderId: '1028244444496',
  appId: '1:1028244444496:web:35f79e3fb80d060433c855',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

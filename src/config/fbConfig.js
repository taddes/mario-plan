import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyC5LwIFxxG8LBBaDzOJRj_srrd8E0i6Rus",
  authDomain: "mario-plan-24561.firebaseapp.com",
  databaseURL: "https://mario-plan-24561.firebaseio.com",
  projectId: "mario-plan-24561",
  storageBucket: "mario-plan-24561.appspot.com",
  messagingSenderId: "807040737187",
  appId: "1:807040737187:web:f0ef0776c2e8362b"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDFvdWThzRZJRWEhsRfjXd6pDH0INyehWA",
    authDomain: "storytelling-trial.firebaseapp.com",
    databaseURL: "https://storytelling-trial-default-rtdb.firebaseio.com",
    projectId: "storytelling-trial",
    storageBucket: "storytelling-trial.appspot.com",
    messagingSenderId: "499836648163",
    appId: "1:499836648163:web:6f58c85a11b40f1532e3d6"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCqwBQS6tSvTPc0i7e_DnVNXR6euREZtH4",
  authDomain: "proc71-a9341.firebaseapp.com",
  projectId: "proc71-a9341",
  storageBucket: "proc71-a9341.appspot.com",
  messagingSenderId: "946576946991",
  appId: "1:946576946991:web:d8b2525cd8b09aa31c13da"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
// firebase-client.js
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj6rlD2XfxchBNA7QFws9bXTrMTQEYZTc",
  authDomain: "ecosentra-b518d.firebaseapp.com",
  projectId: "ecosentra-b518d",
  storageBucket: "ecosentra-b518d.appspot.com",
  messagingSenderId: "706806291686",
  appId: "1:706806291686:web:a48e994e141fa02ff86f27",
  measurementId: "G-MVB6202Z2D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

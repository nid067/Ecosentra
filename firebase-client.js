// firebase-client.js
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "api_key",
  authDomain: "auth_domain",
  projectId: "project_id",
  storageBucket: "storage_bucket",
  messagingSenderId: "messaging_senderid",
  appId: "app_id",
  measurementId: "measurement_id"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();


import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi8-lwgx667UNeDRqYCVWPRoIfbqyjwiE",
  authDomain: "shopping-web-57a2c.firebaseapp.com",
  projectId: "shopping-web-57a2c",
  storageBucket: "shopping-web-57a2c.appspot.com",
  messagingSenderId: "252798018631",
  appId: "1:252798018631:web:b0578497bd1379b917fd62",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;

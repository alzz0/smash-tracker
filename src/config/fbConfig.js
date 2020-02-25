import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyD1kYJyvdacDftjLth0b9gRha-1h6R6wlI",
  authDomain: "smashbros-fa91c.firebaseapp.com",
  databaseURL: "https://smashbros-fa91c.firebaseio.com",
  projectId: "smashbros-fa91c",
  storageBucket: "smashbros-fa91c.appspot.com",
  messagingSenderId: "434722815657",
  appId: "1:434722815657:web:87623cf1061653c038b3b8",
  measurementId: "G-9G452HN5WT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;

import firebase from "firebase"; 
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBfSAM5C09KEoK8yVht78Dg3p7ARcfvsQY",
  authDomain: "hydrationreminder-5e1f8.firebaseapp.com",
  projectId: "hydrationreminder-5e1f8",
  storageBucket: "hydrationreminder-5e1f8.appspot.com",
  messagingSenderId: "793908062182",
  appId: "1:793908062182:web:db3266f10aebea71bd1827",
  measurementId: "G-3S3QFGGP1N"
    };
    
firebase.initializeApp(firebaseConfig); 
export default firebase.firestore();
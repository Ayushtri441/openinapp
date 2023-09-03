import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDZ0noQPFiajgBF_cvqcChMLBwtra0koZE",
  authDomain: "openinapp-7e6d6.firebaseapp.com",
  databaseURL: "https://openinapp-7e6d6-default-rtdb.firebaseio.com",
  projectId: "openinapp-7e6d6",
  storageBucket: "openinapp-7e6d6.appspot.com",
  messagingSenderId: "760440759739",
  appId: "1:760440759739:web:3f117dba2dabd51097509e",
  measurementId: "G-G9VDD9Z834"
};
 const InitializeApp=initializeApp(firebaseConfig)

export default  InitializeApp
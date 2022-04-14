// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhmTlLpKpUJzaOAQ8qxQty7HHpSiQ9Sx4",
  authDomain: "genius-car-service-32a83.firebaseapp.com",
  projectId: "genius-car-service-32a83",
  storageBucket: "genius-car-service-32a83.appspot.com",
  messagingSenderId: "547632951356",
  appId: "1:547632951356:web:fefd4aa7dec4ebacca1339"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
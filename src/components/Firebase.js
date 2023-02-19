// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeC-vU6tYYkUxGBcyLuBq50DqRwqXWMfs",
    authDomain: "login-registration-react-demo.firebaseapp.com",
    projectId: "login-registration-react-demo",
    storageBucket: "login-registration-react-demo.appspot.com",
    messagingSenderId: "831441178908",
    appId: "1:831441178908:web:790de48c691f0ee646ead9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
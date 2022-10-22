// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKUqpUh7thud_Z4Z1vI71vaD54tafMjrI",
    authDomain: "my-travel-first.firebaseapp.com",
    projectId: "my-travel-first",
    storageBucket: "my-travel-first.appspot.com",
    messagingSenderId: "390761107057",
    appId: "1:390761107057:web:b61937457fca5b363255d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
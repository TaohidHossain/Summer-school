import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAsbST1Ee9ORiWLX5hqaMZ4p0g9O7Z3Yvo",
    authDomain: "toy-car-market.firebaseapp.com",
    projectId: "toy-car-market",
    storageBucket: "toy-car-market.appspot.com",
    messagingSenderId: "471934137132",
    appId: "1:471934137132:web:d45f104094b7b3372e3289"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
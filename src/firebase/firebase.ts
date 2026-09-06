import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyDhXRm1n4Bt7k8byyyaFhsAHXPoY42wNDE",
    authDomain: "outstandingspots.firebaseapp.com",
    projectId: "outstandingspots",
    storageBucket: "outstandingspots.firebasestorage.app",
    messagingSenderId: "998097994110",
    appId: "1:998097994110:web:19e8c4c3121ef7bc9af32f"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

firebaseAuth.languageCode = 'ko';
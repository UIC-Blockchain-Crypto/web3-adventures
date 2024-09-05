// Import the functions you need from the SDKs you need
import { getApps, initializeApp, FirebaseApp } from "@firebase/app";

import { getAnalytics } from 'firebase/analytics';
import {GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const provider = new GoogleAuthProvider();

const firebaseConfig = {

    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,

    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,

    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,

    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,

    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,

    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,

    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,

};

// Initialize Firebase
// eslint-disable-next-line import/no-mutable-exports
let app;

if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

export { app };

// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import firebase from "firebase/compat/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIEwvynYuDRGhwryFpKp2WTrY5xlvBbCg",
  authDomain: "mandirui.firebaseapp.com",
  projectId: "mandirui",
  storageBucket: "mandirui.appspot.com",
  messagingSenderId: "293006605058",
  appId: "1:293006605058:web:24ba20740c69bfd493201b",
  measurementId: "G-QSEG5DH5N3"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}
// const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

export { auth };

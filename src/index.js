import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6jUpYwT1hB3YCzFQ0gdiTnB5tExS2ZqM",
  authDomain: "react-coder-26947.firebaseapp.com",
  projectId: "react-coder-26947",
  storageBucket: "react-coder-26947.appspot.com",
  messagingSenderId: "172729187024",
  appId: "1:172729187024:web:24086771bad37a23393cd5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

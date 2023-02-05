import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBgvUSHhuZLgqLj1BPHexFySdgdufWZWpE",
  authDomain: "dev-work-22.firebaseapp.com",
  projectId: "dev-work-22",
  storageBucket: "dev-work-22.appspot.com",
  messagingSenderId: "69686847592",
  appId: "1:69686847592:web:9c1d930f475f596aefb3dd"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 //<React.StrictMode>
    <App />
  //</React.StrictMode>
);


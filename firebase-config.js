
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

export const firebaseConfig = {
  apiKey: "AIzaSyCVeygP6hItCkEHR8xjJuI_PgsP9rHBSn8",
  authDomain: "raun-vie.firebaseapp.com",
  projectId: "raun-vie",
  storageBucket: "raun-vie.firebasestorage.app",
  messagingSenderId: "505471906569",
  appId: "1:505471906569:web:348f3cd2802327adf299d8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';

window.onload = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      document.getElementById("loginBox").style.display = "none";
      document.getElementById("connectedBox").style.display = "block";
    }
  });
};

window.login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "ajouter-capsule.html";
    })
    .catch((error) => alert("Erreur : " + error.message));
};

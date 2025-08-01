import { auth } from './firebase-config.js';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';

window.onload = () => {
  onAuthStateChanged(auth, (user) => {
    if (user && user.email === "admin@raun.com") {
      // Si déjà connecté en tant qu'admin, rediriger vers la page admin
      window.location.href = "ajouter-capsule.html";
    } else {
      // Sinon, afficher le formulaire de connexion
      document.getElementById("loginBox").style.display = "block";
    }
  });
};

window.login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.email === "admin@raun.com") {
        window.location.href = "ajouter-capsule.html";
      } else {
        alert("Accès refusé : vous n'êtes pas l'administrateur.");
      }
    })
    .catch((error) => {
      alert("Erreur : " + error.message);
    });
};

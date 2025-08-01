import { auth } from './firebase-config.js';
import {
  signInWithEmailAndPassword,
  signOut
} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';

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

window.logout = () => {
  signOut(auth).then(() => {
    alert("Déconnecté avec succès.");
    window.location.href = "admin.html";
  });
};

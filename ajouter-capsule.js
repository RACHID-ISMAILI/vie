
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "admin.html";
  } else {
    console.log("Connecté en tant que :", user.email);
    document.getElementById("ajouterBtn").addEventListener("click", async () => {
      const titre = document.getElementById("title").value.trim();
      const contenu = document.getElementById("content").value.trim();

      if (!titre || !contenu) {
        alert("Merci de remplir tous les champs.");
        return;
      }

      try {
        await addDoc(collection(db, "capsules"), {
          titre: titre,
          contenu: contenu,
          date: serverTimestamp(),
          lectures: 0,
          votes_up: 0,
          votes_down: 0,
          commentaires: []
        });
        alert("Capsule ajoutée avec succès !");
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
      } catch (e) {
        alert("Erreur lors de l'ajout : " + e.message);
      }
    });
  }
});

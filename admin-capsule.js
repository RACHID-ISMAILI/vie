
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const capsulesCol = collection(db, "capsules");

const titreInput = document.getElementById("titre");
const contenuInput = document.getElementById("contenu");
const ajouterBtn = document.getElementById("ajouterBtn");
const capsulesList = document.getElementById("capsulesList");

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "admin.html";
  } else {
    loadCapsules();
  }
});

ajouterBtn.addEventListener("click", async () => {
  const titre = titreInput.value.trim();
  const contenu = contenuInput.value.trim();
  if (titre && contenu) {
    await addDoc(capsulesCol, { titre, contenu, date: new Date() });
    titreInput.value = "";
    contenuInput.value = "";
    loadCapsules();
  }
});

async function loadCapsules() {
  capsulesList.innerHTML = "";
  const snapshot = await getDocs(capsulesCol);
  if (snapshot.empty) {
    capsulesList.innerHTML = "<em>Aucune capsule enregistrée.</em>";
    return;
  }
  snapshot.forEach(doc => {
    const data = doc.data();
    const div = document.createElement("div");
    div.innerHTML = `<strong>${data.titre}</strong><br>${data.contenu}<hr>`;
    capsulesList.appendChild(div);
  });
}

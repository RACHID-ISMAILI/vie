
firebase.initializeApp(firebaseConfig);
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  getAuth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      if (email === "admin@raun.com") {
        window.location.href = "portail-admin.html";
      } else {
        getAuth().signOut().then(() => {
          alert("Accès refusé : seul admin@raun.com est autorisé.");
        });
      }
    })
    .catch((error) => {
      alert("Erreur de connexion : " + error.message);
    });
});

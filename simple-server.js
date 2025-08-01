const express = require('express');
const path = require('path');

const app = express();

// Servir tous les fichiers statiques
app.use(express.static(__dirname));

// Route principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🔥 RAUN actif sur http://0.0.0.0:${PORT}`);
  console.log(`📱 Accès via Replit Preview`);
});
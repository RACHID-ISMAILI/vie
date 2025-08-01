
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Servir les fichiers statiques
app.use(express.static(__dirname));

// Route principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API de test
app.get('/api/status', (req, res) => {
  res.json({ status: 'RAUN VIVANT est en ligne', timestamp: new Date() });
});

app.listen(3000, '0.0.0.0', () => {
  console.log('🔥 RAUN VIVANT est en ligne sur http://0.0.0.0:3000');
  console.log('📁 Serveur web et API actifs');
});
        
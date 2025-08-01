
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('🔥 RAUN VIVANT est en ligne sur http://localhost:3000');
});

app.listen(3000, () => {
  console.log('🔥 RAUN VIVANT est en ligne sur http://localhost:3000');
});
        
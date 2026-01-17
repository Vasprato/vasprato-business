'use strict';

const path = require('path');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
app.set('trust proxy', 1);

app.use(helmet());
app.use(compression());

const PUBLIC_DIR = path.join(__dirname, 'public');
app.use(express.static(PUBLIC_DIR));

// Always serve the landing page
app.get('*', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`VASPRATO Business running on port ${PORT}`);
});

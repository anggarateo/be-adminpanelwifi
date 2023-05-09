require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.APP_PORT ?? 2023;
const address = require('address');
const open = require('openurl').open;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Access to /wifi');
});

app.get('/wifi', (req, res) => {
  const ip = address.ip().split('.')
  const result = `${ip[0]}.${ip[1]}.${ip[2]}.1`
  res.send('Please wait...');
  open(`http://${result}`);
});
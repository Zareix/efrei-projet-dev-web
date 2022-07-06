const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = 3001;

const etudiants = require('./routes/etudiants');
const responsables = require('./routes/responsables');
const materiels = require('./routes/materiels');
const prets = require('./routes/prets');

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

app.use('/api/etudiants', etudiants);
app.use('/api/responsables', responsables);
app.use('/api/materiels', materiels);
app.use('/api/prets', prets);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const PORT = 3001;

const app = express();

app.use(cors());

const dogs = [];

app.get('/dog/random', async (req, res) => {
  try {
    const { status, message } = (await axios.get('https://dog.ceo/api/breeds/image/random')).data;
    dogs.push(message);
    res.json({});
    // res.json(message);
  } catch(e) {
    console.error(e);
  } 
});

app.get('/dog/:idx', (req, res) => {
  const { idx } = req.params;
  res.json(dogs[Number(idx)]);
});

app.get('/dog', (req, res) => {
  res.json(dogs);
});

app.listen(PORT, () => console.log(`LISTENING ON PORT: ${PORT}`));
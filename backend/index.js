const express = require('express');
const cors = require('cors');
const axios = require('axios');
const PORT = 3001;

const app = express();

app.use(cors());

const dogs = [];

app.get('/dog/random', async (req, appRes) => {
  axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      const { data } = res;

      const { status, message } = data;

      dogs.push(message);

      appRes.json(message);
    })
    .catch(e => {
      console.log(e);
    });
});

app.get('/dog/:idx', (req, res) => {
  const { idx } = req.params;
  if (dogs[Number(idx)] === undefined) {
    res.json("");
  } else {
    res.json(dogs[Number(idx)]);
  }
});

app.get('/dog', (req, res) => {
  res.json(dogs);
});



app.listen(PORT, () => console.log(`LISTENING ON PORT: ${PORT}`));

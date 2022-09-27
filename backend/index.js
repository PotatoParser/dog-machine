const express = require('express');
const cors = require('cors');
const axios = require('axios');
const PORT = 3001;

const app = express();

app.use(cors());
const defaultDogImage = "https://spectrum.ieee.org/media-library/image.jpg?id=25584273"
const dogs = [defaultDogImage];

app.get('/dog/random', async (req, appRes) => {
  axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      // res is a json that looks like this:
      // {
      //   data: {
      //     status: SOMESTATUS,
      //     message: DOG IMAGE URL (IMPORTANT)
      //   }
      // }
      // How do you retrieve the dog image url, add it to the dogs array (to "save" it), and send the url as a response?
    })
    .catch(e => {
      // Console log any errors
    });
});

app.get('/dog/:idx', (req, res) => {
  const { idx } = req.params;
  if (dogs[Number(idx)] === undefined) {
    res.json(defaultDogImage);
  } else {
    res.json(dogs[Number(idx)]);
  }
});

app.get('/dog', (req, res) => {
  // Return the dogs array as a response
});



app.listen(PORT, () => console.log(`LISTENING ON PORT: ${PORT}`));

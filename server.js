const express = require('express');
const app = express();
const axios = require('axios');

const port = process.env.PORT || 3040;

app.get('/', async function(req, res) {
  try {
    const res = await axios.get('http://localhost:3040/data'); // Make request to frontend
    res.send('Hello World from Backend, connected to Frontend: ' + res.data);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occurred');
  }
});

app.get('/data', (req, res) => {
  res.send('Data from backend');
});

app.listen(port, () => {
  console.log(`Server is running up on ${port}`);
});

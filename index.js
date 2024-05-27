const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/sound/:name', (req, res) => {
  const { name } = req.params;
  name === 'cat'
    ? res.send({ sound: '냐옹냐옹' })
    : res.send({ sound: '멍멍' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

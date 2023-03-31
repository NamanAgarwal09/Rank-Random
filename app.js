const express = require('express');
const dataRouter = require('./routes/dataRouter');
const data = require('./dataFormat');
const app = express();

app.use(express.json());

app.use('/', dataRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

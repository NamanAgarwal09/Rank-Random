const express = require('express');
const data = require('./data.json');
const app = express();

// const displayData = fs.readFileSync(
//   `${__dirname}/templete/index.html`,
//   'utf-8'
// );

// const dataTemplete = fs.readFileSync(
//   `${__dirname}/templete/cards.html`,
//   'utf-8'
// );

app.use('/home', (req, res) => {
  console.log(req.path);

  // res.writeHead(200, { 'Content-type': 'text/html' });
  // const cardHtml = 'hello';
  // res.send(output);

  // res.writeHead(200, { 'Content-type': 'text/html' });
  // const dataObj = JSON.stringify(data);
  // const output = displayData.replace('{%PRODUCT_CARDS%}', dataTemplete);

  // res.write(output);
  // res.end();
  res.status(200).json({
    satuts: 'success',
    Message: data,
  });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const express = require('express');
const dataRouter = require('./routes/dataRouter');
const app = express();
const path = require('path');
const viewRouter = require('./routes/viewRoutes');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewRouter);
app.use('/home', dataRouter);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
app.use(express.static('templete'));

const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`));
var TempOverview = fs.readFileSync('./templete/index.html', 'utf-8');

exports.checkDataInJSON = (req, res, next) => {
  const userData = req.body;
  const jsonFileContent = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
  const jsonData = JSON.parse(jsonFileContent);

  const isDataInJSON = Object.keys(jsonData).some(
    (key) => JSON.stringify(jsonData[key]) === JSON.stringify(userData)
  );

  if (isDataInJSON) {
    res.status(400).send('Error: Data already exists in the JSON file.');
  } else {
    next();
  }
};

exports.skills = (req, res) => {
  try {
    var output = data.filter((data) => data.genera == 'skills');
    // res.status(200).json({
    //   status: 'success',
    //   result: output.length,
    //   message: output,
    // });
    TempOverview = TempOverview.replace(
      '{%PRODUCT_CARDS%}',
      JSON.stringify(output)
    );
    res.status(200).send(TempOverview);
  } catch (err) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

exports.wod = (req, res) => {
  try {
    var output = data[Math.floor(Math.random() * data.length)];
    // res.status(200).json({
    //   status: 'success',
    //   result: output.length,
    //   message: output,
    // });

    TempOverview = TempOverview.replace(
      '{%PRODUCT_CARDS%}',
      JSON.stringify(output)
    );
    res.status(200).send(TempOverview);
  } catch (err) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

exports.getAlldata = (req, res) => {
  try {
    const output = JSON.stringify(data);
    TempOverview = TempOverview.replace('{%PRODUCT_CARDS%}', output);
    res.status(200).send(TempOverview);
  } catch (err) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

exports.createdata = (req, res) => {
  try {
    const www = req.body;
    data.push(www);

    fs.writeFile(`${__dirname}/data.json`, JSON.stringify(data), (err) => {
      if (err) throw err; // Throw the error object instead of a console.log message
      res.status(201).json({
        status: 'success',
        result: data.length,
        message: 'data created',
        data,
      });
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'data not created',
    });
  }
};

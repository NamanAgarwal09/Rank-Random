const fs = require('fs');

const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`));

exports.Module = data;
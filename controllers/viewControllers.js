const data = require('../data.json');

exports.getOverview = (req, res) => {
  const output = data;
  res.status(200).render('overview', {
    title: 'All Website',
    output,
  });
};
exports.getSkills = (req, res) => {
  const output = data.filter((data) => data.genera == 'skills');
  res.status(200).render('data', {
    title: 'skills',
    output,
  });
};
exports.wod = (req, res) => {
  const output = data;
  res.status(200).render('wod', {
    title: 'Website Of The Day',
    output,
  });
};
exports.timepass = (req, res) => {
  const output = data.filter((data) => data.genera == 'timepass');
  res.status(200).render('timepass', {
    title: 'TimePass',
    output,
  });
};

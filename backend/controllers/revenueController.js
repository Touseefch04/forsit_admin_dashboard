const fs = require('fs');
const path = require('path');
const revenueFile = path.join(__dirname, '../data/revenue.json');

exports.getRevenue = (req, res) => {
  const data = fs.readFileSync(revenueFile);
  res.json(JSON.parse(data));
};
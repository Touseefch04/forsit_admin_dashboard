const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes
const productRoutes = require('./routes/products');
const revenueRoutes = require('./routes/revenue');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productRoutes);
app.use('/api/revenue', revenueRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const fs = require('fs');
const path = require('path');
const productsFile = path.join(__dirname, '../data/products.json');

function readProducts() {
  const data = fs.readFileSync(productsFile);
  return JSON.parse(data);
}

function writeProducts(data) {
  fs.writeFileSync(productsFile, JSON.stringify(data, null, 2));
}

exports.getProducts = (req, res) => {
  const products = readProducts();
  res.json(products);
};

exports.addProduct = (req, res) => {
  const products = readProducts();
  const newProduct = { ...req.body, id: Date.now() };
  products.push(newProduct);
  writeProducts(products);
  res.status(201).json(newProduct);
};

exports.updateInventory = (req, res) => {
  const products = readProducts();
  const productId = parseInt(req.params.id);
  const updatedStock = req.body.stock;

  const index = products.findIndex(p => p.id === productId);
  if (index !== -1) {
    products[index].stock = updatedStock;
    writeProducts(products);
    res.json(products[index]);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};
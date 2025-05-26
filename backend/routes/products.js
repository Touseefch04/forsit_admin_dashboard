const express = require('express');
const router = express.Router();
const { getProducts, addProduct, updateInventory } = require('../controllers/productsController');

router.get('/', getProducts);
router.post('/', addProduct);
router.put('/:id', updateInventory);

module.exports = router;
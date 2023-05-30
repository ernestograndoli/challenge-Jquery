const express = require('express');
const router = express.Router();
const stockPrices = require('../data/stock-price')


router.get('', (req, res) => {
    res.render('products', { title: 'Product List' })
})

router.get('*', (req, res) => {
    res.render('product-detail', { title: 'Product Detail' })
})

module.exports = router;

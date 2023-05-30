const express = require('express');
const router = express.Router();
const stockPrices = require('../data/stock-price')


router.get('/stockprice/:code', function (req, res, next) {
    const { code } = req.params
    if (code in stockPrices) {
        res.json(stockPrices[code]);
    } else {
        console.log(`Code ${code} not found`)
        res.status(404).send('Not found');
    }
});

module.exports = router;

const router = require("express").Router();
const db = require('../config/connectDatabase');
const Product = require('../models/product')

router.get('/', async function(req, res, next) {
	console.log('[query] find all products...');
    const products = await Product.findAndCountAll();

	res.send(products);
});

module.exports = router;
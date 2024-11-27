const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartControllers');

router.post('/add', cartController.addToCart);
router.delete('/remove/:id', cartController.removeFromCart);
router.get('/', cartController.getCartItems);

module.exports = router;

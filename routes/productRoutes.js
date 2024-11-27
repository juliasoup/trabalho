const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');

router.post('/', productController.createProduct);
router.get('/', productController.getProducts);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;

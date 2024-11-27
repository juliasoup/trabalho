const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentControllers');

router.post('/credit-card', paymentController.processCreditCardPayment);
router.post('/pix', paymentController.processPixPayment);
router.get('/status/:transactionId', paymentController.getTransactionStatus);

module.exports = router;

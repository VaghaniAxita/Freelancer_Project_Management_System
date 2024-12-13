const express = require('express');
const { markAsPaid, createPayment, getPayments, getPaymentById, updatePayment, deletePayment } = require('../controllers/paymentController');

const router = express.Router();


router.post('/', createPayment);
router.get('/', getPayments);
router.get('/:id', getPaymentById);
router.put('/:id', updatePayment);
router.delete('/:id', deletePayment);
router.put('/:id/pay', markAsPaid);

module.exports = router;

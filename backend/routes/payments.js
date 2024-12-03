const express = require('express');
const {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
  payPayment,
} = require('../controllers/paymentController');
const protect = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, createPayment);
router.get('/', protect, getAllPayments);
router.get('/:id', protect, getPaymentById);
router.put('/:id', protect, updatePayment);
router.delete('/:id', protect, deletePayment);
router.post('/:id/pay', protect, payPayment);

module.exports = router;

const Payment = require('../models/Payment');


exports.createPayment = async (req, res) => {
    try {
        const { projectId, amount, status } = req.body;
        const payment = new Payment({ projectId, amount, status });
        await payment.save();
        res.status(201).json({ message: 'Payment created successfully', payment });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


exports.getPayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        res.json(payments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.json(payment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.updatePayment = async (req, res) => {
    try {
        const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.json(payment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


exports.deletePayment = async (req, res) => {
    try {
        const payment = await Payment.findByIdAndDelete(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.json({ message: 'Payment deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.markAsPaid = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        payment.status = 'Paid';
        await payment.save();
        res.json({ message: 'Payment status updated to Paid', payment });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

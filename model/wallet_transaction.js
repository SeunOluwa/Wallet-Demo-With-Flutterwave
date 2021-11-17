const mongoose = require('mongoose');

const walletTransactionSchema = new mongoose.Schema({
    amount: { type: Number, default: 0 },

    // even though user can be implied from wallet, let us
    // double save it for security
    userId: {
        type: String,
        ref: 'users',
        required: true
    },

    isInFlow: { type: Boolean },

    paymentMethod: { type: String, default: 'flutterwave' },

    currency: {
        type: String,
        required: [true, 'currency is required'],
        enum: ['successful', 'pending', 'failed']
    },

    status: {
        type: String,
        required: [true, 'payment status is required'],
        enum: ['successful', 'pending', 'failed']
    }
}, { timestamps: true });

module.exports = mongoose.model('WalletTransaction', walletTransactionSchema);

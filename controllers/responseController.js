const axios = require('axios');

const User = require('../model/User');
const Transaction = require('../model/Transaction');

const walletController = require('../controllers/walletController');
const walletTransactionController = require('../controllers/walletTransactionController');
const transactionController = require('../controllers/transactionController');

require('dotenv').config();

const response = async (req, res) => {
    const { transaction_id } = req.query;

    // URL with transaction ID of which will be used to confirm transaction status
    const url = `https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`;

    // network call to confirm transaction status
    const response = await axios({
        url,
        method: 'get',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `${process.env.FLUTTERWAVE_V3_SECRET_KEY}`,
        }
    });

    const { status, currency, id, amount, customer } = response.data.data;

    // check if customer exist in the database
    const user = await User.findOne({ email: customer.email });

    // check if user have a wallet else create wallet
    const wallet = await walletController.validateUserWallet(user._id);

    // create wallet transaction
    await walletTransactionController.createWalletTransaction(user._id, status, currency, amount);

    // create transaction
    await transactionController.createTransaction(user._id, id, status, currency, amount, customer);

    await walletController.updateWallet(user._id, amount);

    // check if transaction id already exist
    const transactionExist = await Transaction.findOne({ transactionId: id });

    if (transactionExist) {
        return res.status(409).send('Transaction Already Exist');
    }

    return res.status(200).json({
        response: 'wallet funded successfully',
        data: wallet
    });
}

module.exports = {
    response
}

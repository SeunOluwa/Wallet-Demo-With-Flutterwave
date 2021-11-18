const Transaction = require('../model/Transaction');

const createTransaction = async (
    userId,
    id,
    status,
    currency,
    amount,
    customer
) => {
    try {
        // create transaction
        const transaction = await Transaction.create({
            userId,
            transactionId: id,
            name: customer.name,
            email: customer.email,
            phone: customer.phone_number,
            amount,
            currency,
            paymentStatus: status,
            paymentGateway: 'flutterwave'
        });
        return transaction;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createTransaction
}

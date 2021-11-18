const WalletTransaction = require('../model/Wallet_Transaction');

const createWalletTransaction = async (userId, status, currency, amount) => {
    try {
        // create wallet transaction
        const walletTransaction = await WalletTransaction.create({
            amount,
            userId,
            isInflow: true,
            currency,
            status
        });
        return walletTransaction;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createWalletTransaction
}

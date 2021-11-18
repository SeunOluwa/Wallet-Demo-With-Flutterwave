const Wallet = require('../model/Wallet');

const validateUserWallet = async (userId) => {
    try {
        // check if user have a wallet else create wallet
        const userWallet = await Wallet.findOne({ userId });

        // if user wallet doesn't exist, create a new one
        if (!userWallet) {
            // create wallet
            const wallet = await Wallet.create({
                userId
            });
            return wallet;
        }
        return userWallet;
    } catch (error) {
        console.log(error);
    }
}

const updateWallet = async (userId, amount) => {
    try {
        // update wallet
        const wallet = await Wallet.findOneAndUpdate(
            { userId },
            { $inc: { balance: amount } },
            { new: true }
        );
        return wallet;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    validateUserWallet,
    updateWallet
}

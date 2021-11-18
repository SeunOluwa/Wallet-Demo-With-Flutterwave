const Wallet = require('../model/Wallet');

const balance = async (req, res) => {
    try {
        const { userId } = req.params;

        const wallet = await Wallet.findOne({ userId });
        // user
        res.status(200).json(wallet.balance);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    balance
}

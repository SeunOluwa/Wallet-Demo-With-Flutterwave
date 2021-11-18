const axios = require('axios');

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

    console.log(response.data.data);
}

module.exports = {
    response
}

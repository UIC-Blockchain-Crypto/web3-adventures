import axios from 'axios';

export default async function handler(req, res) {
    const { transactionId, userAddress } = req.body;

    if (!transactionId || !userAddress) {
        return res.status(400).json({ error: 'Missing transactionId or userAddress' });
    }

    const apiKey = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY; // Store your Etherscan API key in .env file

    try {
        // Fetch transaction details using the Etherscan API
        const response = await axios.get(
            `https://api.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash=${transactionId}&apikey=${apiKey}`
        );

        console.log('Transaction Found?:', response.data);

        if (response.data.status === '1') {
            const transaction = await axios.get(
                `https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${transactionId}&apikey=${apiKey}`
            );

            const { from, to } = transaction.data.result;

            // Check if the transaction involves the userAddress
            if (from.toLowerCase() === userAddress.toLowerCase() || to.toLowerCase() === userAddress.toLowerCase()) {
                return res.status(200).json({ verified: true });
            } else {
                return res.status(200).json({ verified: false });
            }
        } else {
            return res.status(200).json({ verified: false });
        }
    } catch (error) {
        console.error("Error verifying transaction:", error);
        return res.status(500).json({ error: "Failed to verify transaction" });
    }
}

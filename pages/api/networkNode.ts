import axios from 'axios';

export default async function handler(req, res) {

    console.log('Verifying transaction IN API:', req.body);
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { transactionId, userAddress, networkName, challengeId, type } = req.body;

    if (!transactionId || !userAddress || !networkName || !challengeId || !type) {
        return res.status(400).json({ error: 'Missing transactionId, userAddress, networkName, challengeId, or type' });
    }

    const networkUrls = {
        sepolia: `${process.env.NEXT_PUBLIC_SEPOLIA_INFURA_NETWORK_URL}/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`,
        holesky: `${process.env.NEXT_PUBLIC_HOLESKY_INFURA_NETWORK_URL}/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`,
        mainnet: `${process.env.NEXT_PUBLIC_MAINNET_INFURA_NETWORK_URL}/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`,
    };

    const infuraUrl = networkUrls[networkName.toLowerCase()];
    if (!infuraUrl) {
        return res.status(400).json({ error: `Unsupported network: ${networkName}` });
    }

    console.log('Infura URL:', infuraUrl);
    console.log('Transaction ID:', transactionId);

    try {
        const response = await axios.post(infuraUrl, {
            jsonrpc: '2.0',
            method: 'eth_getTransactionByHash',
            params: [transactionId],
            id: 1,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.data || !response.data.result) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        console.log('Transaction Found?:', response.data);
        const transactionData = response.data.result;

        if (!transactionData) {
            return res.status(404).json({ message: 'Transaction not found' });
        }

        const transactionFrom = transactionData.from;
        const transactionTo = transactionData.to ? transactionData.to : null;
        const isUserInvolved = (transactionFrom === userAddress || transactionTo === userAddress);

        console.log('Transaction From:', transactionFrom, 'Transaction To:', transactionTo, 'User Address:', userAddress);

        console.log('Is User Involved:', isUserInvolved);

        if (isUserInvolved) {
            return res.status(200).json({
                transactionId,
                userAddress,
                networkName,
                type,
                challengeId,
                verified: true,
                message: `Transaction is verified in the ${networkName} network`,
            });
        } else {
            return res.status(200).json({
                transactionId,
                userAddress,
                networkName,
                type,
                challengeId,
                verified: false,
                message: `Transaction exists in the ${networkName} network but doesn't belong to the user`,
            });
        }
    } catch (error) {
        console.error('Error verifying transaction:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

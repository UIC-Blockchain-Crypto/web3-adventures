import axios from "axios";

export const verifyTxnId = async (userAddress, transactionId, networkName, challengeId, type) => {
    console.log('Verifying transaction:', transactionId, userAddress, networkName, challengeId, type);

    try {
        const response = await axios.post('/api/networkNode', {
            transactionId,
            userAddress,
            networkName,
            challengeId,
            type,
        });

        const { transactionId: txnId, userAddress: user, networkName: network, type: txnType, challengeId: challenge, verified, message } = response.data;

        return {
            transactionId: txnId,
            userAddress: user,
            networkName: network,
            type: txnType,
            challengeId: challenge,
            verified,
            message,
        };
    } catch (error) {
        return {
            transactionId,
            userAddress,
            networkName,
            type,
            challengeId,
            verified: false,
            message: 'Failed to verify transaction',
        };
    }
};

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { Button } from '@mantine/core';
import useEthereumStore from '../../store/useEthereumStore';
import {getScore, setScoreWithVerification} from '@/lib/scoreTable'; // Import the store

const EthereumSignInButton = () => {
    const [errorMessage, setErrorMessage] = useState('');

    // Zustand store actions
    const { account, network, setAccount, setNetwork, setIsConnected } = useEthereumStore();

    const connectWallet = async () => {
        try {
            let signer = null;
            let provider;

            if (window.ethereum == null) {
                setErrorMessage('MetaMask not installed. Please install MetaMask.');
                return;
            }

            provider = new ethers.BrowserProvider(window.ethereum);
            signer = await provider.getSigner();

            // Request account access
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });

            const userAddress = accounts[0];
            setAccount(userAddress);
            setIsConnected(true);

            // Get the network
            const networkDetails = await provider.getNetwork();
            setNetwork(networkDetails.name);

            // Sign a message to authenticate
            const message = 'Sign in to your app';
            const signature = await signer.signMessage(message);

            // Log the signature (or send it to your backend)
            console.log('Signature:', signature);

            if (userAddress) {
                updateScore(userAddress);
            }
        } catch (error) {
            setErrorMessage('Failed to connect to wallet.');
            console.error(error);
        }
    };

    const updateScore = async (account) => {
        try {
            const existingScore = await getScore(account); // Check if the user exists in the score table

            if (existingScore) {
                // User already exists, no need to give 5 points again
                console.log(`Returning user: ${account}, current score: ${existingScore.points}`);
            } else {
                // New user, add them to the scoreboard with 5 points
                await setScoreWithVerification(account, 5, '', 0)
                    .catch(errorMsg => setErrorMessage(errorMsg));
                console.log(`New user: ${account}, awarded 5 points.`);
            }
        } catch (error) {
            console.error('Error updating score:', error);
        }
    };

    // Handle account and network changes
    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {
                setAccount(accounts[0]);
                setIsConnected(!!accounts[0]);
            });

            window.ethereum.on('chainChanged', async (chainId) => {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const networkDetails = await provider.getNetwork();
                setNetwork(networkDetails.name);
            });
        }
    }, [setAccount, setNetwork, setIsConnected]);

    return (
        <div>
            <Button onClick={connectWallet}>
                {account
                    ? `Connected: ${account.substring(0, 6)}...${account.substring(account.length - 4)} (${network})`
                    : 'Sign in with Ethereum'}
            </Button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default EthereumSignInButton;

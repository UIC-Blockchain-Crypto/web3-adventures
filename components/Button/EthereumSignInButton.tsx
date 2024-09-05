import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { Button } from '@mantine/core';
import useEthereumStore from '../../store/useEthereumStore'; // Import the store

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

            // Set the first account and network in the store
            setAccount(accounts[0]);
            setIsConnected(true);

            // Get the network
            const networkDetails = await provider.getNetwork();
            setNetwork(networkDetails.name);

            // Sign a message to authenticate
            const message = 'Sign in to your app';
            const signature = await signer.signMessage(message);

            // Log the signature (or send it to your backend)
            console.log('Signature:', signature);
        } catch (error) {
            setErrorMessage('Failed to connect to wallet.');
            console.error(error);
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

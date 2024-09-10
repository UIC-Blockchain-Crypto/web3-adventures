export const challenges = [
    {
        id: 1,
        title: 'Fund your wallet with ETH Testnet from the Sepolia Network',
        description: 'Go to a faucet and get some testnet ETH on Sepolia. A few popular faucets are: [Google Cloud Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia), [Alchemy Faucet](https://www.alchemy.com/faucets/ethereum-sepolia), [Bitbond](https://tokentool.bitbond.com/faucet/ethereum-sepolia), [Infura](https://www.infura.io/faucet/sepolia)',
        points: 10,
        difficulty: 'Easy',
        category: 'Transactions',
        networkName: 'Sepolia',
        transactionIdNeeded: false,
    },
    {
        id: 2,
        title: 'Fund your wallet with ETH Testnet from the Holesky Network',
        description: 'Go to a faucet and get some testnet ETH on Holesky. A few popular faucets are: [Google Cloud Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia), [Alchemy Faucet](https://www.alchemy.com/faucets/ethereum-sepolia)',
        points: 10,
        difficulty: 'Easy',
        category: 'Transactions',
        networkName: 'Holesky',
        transactionIdNeeded: false,
    },
    {
        id: 3,
        title: 'Send a Transaction',
        description: 'Send 0.0001 ETH on Sepolia to our class Ethereum wallet address (0x6836684527E29572A855fEf7348637bE8d972BB7). Refer to the documentation on our [blog](https://paragraph.xyz/@uic-blockchain-crypto/create-and-verify-a-transaction-ethereum) for details.',
        points: 10,
        difficulty: 'Easy',
        category: 'Transactions',
        networkName: 'Sepolia',
        transactionIdNeeded: true,
    },
    {
        id: 4,
        title: 'Lend your ETH',
        description: 'Lend 0.001 ETH on Sepolia using [Aave](https://staging.aave.com/).',
        points: 20,
        difficulty: 'Medium',
        category: 'Lending',
        networkName: 'Sepolia',
        transactionIdNeeded: true,
    },
    {
        id: 5,
        title: 'Borrow USDC',
        description: 'Borrow 0.001 USDC on Sepolia using [Aave](https://staging.aave.com/). You can decide whether to go with a stable or variable interest rate.',
        points: 20,
        difficulty: 'Medium',
        category: 'Lending',
        networkName: 'Sepolia',
        transactionIdNeeded: true,
    },
    {
        id: 6,
        title: 'Send USDC to a Friend',
        description: 'Send 0.001 USDC on Sepolia to your classmate\'s Ethereum wallet address.',
        points: 10,
        difficulty: 'Easy',
        category: 'Transactions',
        networkName: 'Sepolia',
        transactionIdNeeded: true,
    },
    {
        id: 7,
        title: 'Add the Holesky Network to Your Wallet',
        description: 'Follow the [instructions](https://revoke.cash/learn/wallets/add-network/ethereum-holesky) to add the Holesky Network to your wallet.',
        points: 25,
        difficulty: 'Medium',
        category: 'Wallet',
        networkName: 'Holesky',
        transactionIdNeeded: false,
    },
    {
        id: 8,
        title: 'Stake Your ETH',
        description: 'Use [Lido](https://testnet.fi/) to stake 10 ETH on Holesky.',
        points: 30,
        difficulty: 'Hard',
        category: 'Staking',
        networkName: 'Holesky',
        transactionIdNeeded: true,
    },
    {
        id: 9,
        title: 'Import the Lido Holesky Token to Your Wallet',
        description: 'Import the Lido Holesky token to your wallet using the contract address: 0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034. You should now see the sETH token balance you just staked.',
        points: 25,
        difficulty: 'Medium',
        category: 'Wallet',
        networkName: 'Holesky',
        transactionIdNeeded: false,
    },
    {
        id: 10,
        title: 'Unstake Your ETH',
        description: 'Use [Lido](https://testnet.fi/) to unstake 5 ETH on Holesky.',
        points: 10,
        difficulty: 'Easy',
        category: 'Staking',
        networkName: 'Holesky',
        transactionIdNeeded: true,
    },
    {
        id: 11,
        title: 'Add the Sepolia Base Network to Your Wallet',
        description: 'This is similar to how you added the Holesky Network. The Network Name is Base Sepolia, RPC URL is https://sepolia.base.org, the Chain ID is 84532, and the symbol is ETH.',
        points: 25,
        difficulty: 'Medium',
        category: 'Wallet',
        networkName: 'Sepolia Base',
        transactionIdNeeded: false,
    },
    {
        id: 12,
        title: 'Bridge ETH for Base',
        description: 'Bridge 0.005 ETH on Sepolia to Sepolia Base using [Superbridge](https://testnets.superbridge.app/base-sepolia). The process has two steps, and the final step is receiving ETH on the Sepolia Base Network.',
        difficulty: 'Hard',
        points: 30,
        category: 'Bridging',
        networkName: 'Sepolia Base',
        transactionIdNeeded: true,
    },
    {
        id: 13,
        title: 'Create a Token',
        description: 'Use [Bitbond](https://tokentool.bitbond.com/create-token/security-token/ethereum-sepolia) to create a DeFi or Security token. Choose whichever configurations make sense for your token.',
        difficulty: 'Hard',
        points: 30,
        category: 'Tokeneconomics',
        networkName: 'Sepolia',
        transactionIdNeeded: true,
    },
    {
        id: 14,
        title: 'Import Your Token to Your Wallet',
        description: 'Import your token to your wallet using the contract address of the token you just created.',
        difficulty: 'Medium',
        points: 25,
        category: 'Wallet',
        networkName: 'Sepolia',
        transactionIdNeeded: false,
    },
    {
        id: 15,
        title: 'Mint More of Your Tokens',
        description: 'Use [Bitbond](https://tokentool.bitbond.com/managetoken/) to mint more of your tokens and send them to a classmate\'s Ethereum wallet address.',
        difficulty: 'Easy',
        points: 15,
        category: 'Tokeneconomics',
        networkName: 'Sepolia',
        transactionIdNeeded: true,
    },
    {
        id: 16,
        title: 'Burn Some of Your Tokens',
        description: 'Use [Bitbond](https://tokentool.bitbond.com/managetoken/) to burn some of your tokens.',
        difficulty: 'Easy',
        points: 15,
        category: 'Tokeneconomics',
        networkName: 'Sepolia',
        transactionIdNeeded: true,
    },
    {
        id: 17,
        title: 'Lock & Unlock Your Tokens',
        description: 'Use [Bitbond](https://tokentool.bitbond.com/create-token-locker/ethereum-sepolia) to lock some of your tokens for 3 to 5 minutes. Note the contract address where your locked tokens are deposited, as you\'ll need this to withdraw them. You can also look it up on Etherscan. Once the time lock ends, return to the same page to unlock your tokens.',
        difficulty: 'Hard',
        points: 30,
        category: 'Tokeneconomics',
        networkName: 'Sepolia',
        transactionIdNeeded: true,
    },
    {
        id: 18,
        title: 'Attach an On-Chain Message to a Transaction',
        description: 'Use [Bitbond](https://tokentool.bitbond.com/create-chain-record/ethereum-sepolia) to send an on-chain message, such as "hello there," to a classmate. Keep in mind that this message will be forever stored on the blockchain. View the transaction\'s input data as UTF-8 encoded on an Ethereum explorer.',
        difficulty: 'Easy',
        points: 15,
        category: 'Transactions',
        networkName: 'Sepolia',
        transactionIdNeeded: true,
    },
    {
        id: 19,
        title: 'Create a Payment Stream',
        description: 'Use [Sablier](https://sablier.finance/) to create a payment stream on Sepolia. Select the exponential lock-up stream, input your token using its contract ID, and set the duration for 1 hour.',
        difficulty: 'Medium',
        points: 25,
        category: 'Payments',
        networkName: 'Sepolia',
        transactionIdNeeded: true,
    },
    {
        id: 20,
        title: 'Get an ENS for Your Wallet',
        description: 'Get an ENS for your wallet address using [ENS](https://app.ens.domains/). Ensure your wallet is connected to the Sepolia Network. Follow all the instructions on the ENS website. You won\'t see your ENS in your wallet, but you can verify ownership on Etherscan.',
        difficulty: 'Medium',
        points: 20,
        category: 'Wallet',
        networkName: 'Sepolia',
        transactionIdNeeded: false,
    },
];

export const challenges = [
    {
        id: 1,
        title: 'Fund your wallet with ETH Testnet from the Sepolia Network',
        description: 'Go to a faucet and get some testnet ETH Sepolia. A few popular faucets are: [Google Cloud Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia), [Alchemy Faucet](https://www.alchemy.com/faucets/ethereum-sepolia), [Bitbond](https://tokentool.bitbond.com/faucet/ethereum-sepolia)',
        points: 10,
        difficulty: 'Easy',
        category: 'Transactions',
    },
    {
        id: 2,
        title: 'Fund your wallet with ETH Testnet from the Holesky Network',
        description: 'Go to a faucet and get some testnet ETH Holesky. A few popular faucets are: [Google Cloud Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia), [Alchemy Faucet](https://www.alchemy.com/faucets/ethereum-sepolia)',
        points: 10,
        difficulty: 'Easy',
        category: 'Transactions',
    },
    {
        id: 3,
        title: 'Send a Transaction',
        description: 'Send 0.0001 ETH Sepolia to our class Ethereum wallet address (0x6836684527E29572A855fEf7348637bE8d972BB7). Refer to the documentation at our [blog](https://paragraph.xyz/@uic-blockchain-crypto/create-and-verify-a-transaction-ethereum) for details',
        points: 10,
        difficulty: 'Easy',
        category: 'Transactions',
    },
    {
        id: 4,
        title: 'Lend your ETH',
        description: 'Lend 0.001 ETH Sepolia using the [Aave](https://staging.aave.com/).',
        points: 20,
        difficulty: 'Medium',
        category: 'Lending',
    },
    {
        id: 5,
        title: 'Borrow USDC',
        description: 'Borrow 0.001 USDC Sepolia using the [Aave](https://staging.aave.com/). You can decide if you want to go with the Stable or Variable interest rate',
        points: 20,
        difficulty: 'Medium',
        category: 'Lending',
    },
    {
        id: 6,
        title: 'Send your USDC to friend',
        description: 'Send 0.001 USDC Sepolia to your classmate\'s Ethereum wallet address.',
        points: 10,
        difficulty: 'Easy',
        category: 'Transactions',
    },
    {
        id: 7,
        title: 'Add the Holesky Network to your Wallet',
        description: 'Follow the [instructions]([Add Holesky Network](https://revoke.cash/learn/wallets/add-network/ethereum-holesky) to add the Holesky Network to your wallet.',
        points: 25,
        difficulty: 'Medium',
        category: 'Wallet',
    },
    {
        id: 8,
        title: 'Stake your ETH',
        description: 'Use [Lido](https://testnet.fi/) to Stake 10 Holesky ETHs',
        points: 30,
        difficulty: 'Hard',
        category: 'Staking',
    },
    {
        id: 9,
        title: 'Import Token to your Wallet',
        description: 'Import the Lido Holesky token to your wallet using the contract address: 0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034. Now you should see the sEth token balance you just staked',
        points: 25,
        difficulty: 'Medium',
        category: 'Wallet',
    },
    {
        id: 10,
        title: 'Unstake your ETH',
        description: 'Use [Lido](https://testnet.fi/) to Unstake 5 Holesky ETHs',
        points: 10,
        difficulty: 'Easy',
        category: 'Staking',
    },
    {
        id: 11,
        title: 'Add the Sepolia Base Network to your Wallet',
        description: 'This is similar to how you added the Holesky Network. The Network Name is Base Sepolia, RPC URL is https://sepolia.base.org, the Chain ID is 84532, and the symbol is ETH.',
        points: 25,
        difficulty: 'Medium',
        category: 'Wallet',
    },
    {
        id: 12,
        title: 'Bridge ETH for Base',
        description: 'Bridge 0.005 ETH Sepolia ETH for Sepolia Base on [Superbridge](https://testnets.superbridge.app/base-sepolia). The whole process should have 2 steps and the final step is that you will receive ETH on the Sepolia Base Network',
        difficulty: 'Hard',
        points: 30,
        category: 'Bridging',
    },
    {
        id: 13,
        title: 'Create a Token',
        description: 'Use [Bitbond](https://tokentool.bitbond.com/create-token/security-token/ethereum-sepolia) to create a DeFi or Security token, the choice is yours. Choose whichever configurations make sense for your token.',
        difficulty: 'Hard',
        points: 30,
        category: 'Tokeneconomics',
    },
    {
       id: 14,
       title: 'Import your Token to your Wallet',
       description: 'Import the Token to your Wallet using the contract address of the token you just created.',
       difficulty: 'Medium',
       points: 25,
       category: 'Wallet',
    },
    {
        id: 15,
        title: 'Mint more of your Tokens',
        description: '[Mint](https://tokentool.bitbond.com/managetoken/) more of your tokens and send them to a classmate\'s Ethereum wallet address.',
        difficulty: 'Easy',
        points: 15,
        category: 'Tokeneconomics',
    },
    {
        id: 16,
        title: 'Burn some of your Tokens',
        description: '[Burn](https://tokentool.bitbond.com/managetoken/) some of your tokens.',
        difficulty: 'Easy',
        points: 15,
        category: 'Tokeneconomics',
    },
    {
        id: 17,
        title: 'Lock & Unlock your Tokens',
        description: '[Lock](https://tokentool.bitbond.com/create-token-locker/ethereum-sepolia) some of your tokens for a few minutes, roughly 3 to 5 minutes. Take note of the contract address your locked tokens are deposited to, you\'ll need this address to withdraw your tokens, if you forget the address you can always look it up on Etherscan. Go back to the same place you locked your token and enter the contract address to withdraw your tokens, if you\'re doing it before the token lock time you won\'t be able to withdraw the funds. Re-do this step after the time lock ends and withdraw your funds.',
        difficulty: 'Hard',
        points: 30,
        category: 'Tokeneconomics',
    },
    {
        id: 18,
        title: 'Attach a On-Chain Message to Transaction',
        description: '[Send on-chain message](https://tokentool.bitbond.com/create-chain-record/ethereum-sepolia) a classmate an on-chain message like \'hello there\', please make appropriate this will forever be on the internet. Go to the transaction on an Ethereum explorer and view the input data as UTC-8 encoded.',
        difficulty: 'Easy',
        points: 15,
        category: 'Transactions',
    },
    {
        id: 19,
        title: 'Create a Payment Stream',
        description: 'Use [Sablier](https://sablier.finance/) to create a payment stream, be sure you select Sepolia. Choose the exponential lock-up stream, put in your token using your token contract ID, make the duration for 1 hour.',
        difficulty: 'Medium',
        points: 25,
        category: 'Payments',
    },
    {
        id: 20,
        title: 'Get a ENS for your Wallet',
        description: 'Get an ENS for your wallet address, you can use [ENS](https://app.ens.domains/). Be sure that your wallet is on the Sepolia Network. Follow all the instructions presented to you on the ENS website. You won\'t be able to search your ENS on Etherscan or see it in you wallet, but you can verify the ownership on Etherscan and see the contract address.',
        difficulty: 20,
        category: 'Wallets',
    },
];

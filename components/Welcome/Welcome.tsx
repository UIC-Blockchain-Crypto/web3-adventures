import {Anchor, Button, Text, Title} from '@mantine/core';
import classes from './Welcome.module.css';
import useEthereumStore from "@/store/useEthereumStore";
import EthereumSignInButton from "@/components/Button/EthereumSignInButton";
import {useRouter} from "next/router";

export function Welcome() {
  const isConnected = useEthereumStore((state) => state.isConnected);
  const account = useEthereumStore((state) => state.account);
  const network = useEthereumStore((state) => state.network);

  const router = useRouter();

  const startChallenges = () => {
    console.log('Start challenges');
    router.push('/challenges/1');
  };

  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Your{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Web3
        </Text>
          Adventure
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        First connect your wallet to start your DeFi adventure. If you haven&apos;t created your wallet follow this tutorial {' '}
        <Anchor href="https://paragraph.xyz/@uic-blockchain-crypto/create-metamask-wallet" size="lg">
          How to Create ETH Wallet?
        </Anchor>
      </Text>
        {isConnected ? (
            <>
            <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                Connected to {network} with the address {account}
            </Text>
            <Button onClick={startChallenges} color="blue" size="lg" fullWidth mt="xl">
                Get Started
            </Button>
            </>
        ) : (
            <EthereumSignInButton />
        )}
    </>
  );
}

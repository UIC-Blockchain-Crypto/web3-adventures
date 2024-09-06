import { Button, Group, Input, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IconCheck, IconX } from '@tabler/icons-react';
import useEthereumStore from '@/store/useEthereumStore';
import {useRouter} from "next/router";
import {setScore} from "@/lib/scoreTable";
import EthereumSignInButton from "@/components/Button/EthereumSignInButton";

export const ChallengeCard = ({ challenge }) => {
    const [transactionId, setTransactionId] = useState("");
    const [isChallengeVerified, setIsChallengeVerified] = useState(false);
    const [isVerificationFailed, setIsVerificationFailed] = useState(false);
    const [verificationMessage, setVerificationMessage] = useState("");
    const userAddress = useEthereumStore((state) => state.account);

    const router = useRouter();

    const nextChallenge = () => {
        const nextChallengeId = parseInt(challenge.id, 10) + 1;
        setTransactionId('');
        setIsChallengeVerified(false);
        setVerificationMessage('');
        router.push(`/challenges/${nextChallengeId}`);
    };

    async function challengeVerified(transactionId) {
        if (!transactionId) return;

        try {
            const response = await axios.post('/api/verifyTxn', {
                transactionId,
                userAddress,
            });

            console.log('Verification response:', response.data);

            if (response.data.verified) {
                setIsChallengeVerified(true);
                setIsVerificationFailed(false);
                setVerificationMessage('Challenge Verified!');
                await setScore(userAddress, challenge.points);
            } else {
                setIsChallengeVerified(false);
                setIsVerificationFailed(true);
                setVerificationMessage('Transaction does not belong to the user.');
            }
        } catch (error) {
            console.error('Verification failed:', error);
            setIsChallengeVerified(false);
            setIsVerificationFailed(true);
            setVerificationMessage('Verification failed. Please try again.');
        }
    }

    useEffect(() => {
        if (transactionId) {
            challengeVerified(transactionId);
        }
    }, [transactionId]);

    return (
        <div className="card">
            <h1>{challenge.title}</h1>
            <p>{challenge.description}</p>
            <p>Points: {challenge.points}</p>
            <p>Difficulty: {challenge.difficulty}</p>
            <p>Category: {challenge.category}</p>
            {userAddress ? (
                <>
                    <Text>
                        {`Enter your Transaction ID, we'll verify it belongs to address ${userAddress}`}
                    </Text>
                    <Input
                        placeholder="Enter Transaction ID"
                        mb="md"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                    />
                </>
            ) : (
                <>
                    <Text>You need to connect your wallet to verify this challenge.</Text>
                    <EthereumSignInButton />
                </>
            )}

            <Group>
                {isChallengeVerified && <IconCheck size={24} color="green" />}
                {isVerificationFailed && <IconX size={24} color="red" />}
                {verificationMessage && <p>{verificationMessage}</p>}
            </Group>
            {isChallengeVerified && (
                <Button onClick={nextChallenge}>Next</Button>
            )}
        </div>
    );
};

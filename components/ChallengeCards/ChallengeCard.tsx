import { Button, Group, Input, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import useEthereumStore from '@/store/useEthereumStore';
import { setScoreWithVerification } from '@/lib/scoreTable';
import EthereumSignInButton from '@/components/Button/EthereumSignInButton';
import { verifyTxnId } from '@/lib/verifyTxnId';

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
            const verification = await verifyTxnId(userAddress, transactionId, challenge.networkName, challenge.id, challenge.category);

            console.log('Verification:', verification);
            if (verification.verified) {
                setIsChallengeVerified(true);
                setIsVerificationFailed(false);
                setVerificationMessage('Challenge Verified!');
                await setScoreWithVerification(userAddress, challenge.points, transactionId, challenge.id);
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

    // Automatically mark challenge as verified and award points if no transaction ID is needed
    useEffect(() => {
        if (!challenge.transactionIdNeeded && userAddress) {
            setIsChallengeVerified(true);
            setVerificationMessage('Challenge Completed!');
            setScoreWithVerification(userAddress, challenge.points, null, challenge.id);
        } else if (transactionId) {
            challengeVerified(transactionId);
        }
    }, [transactionId, userAddress]);

    const renderDescriptionWithLinks = (description) => {
        const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;
        const parts = [];
        let lastIndex = 0;

        description.replace(markdownLinkRegex, (match, text, url, offset) => {
            parts.push(description.slice(lastIndex, offset));
            parts.push(<a key={offset} href={url} target="_blank" rel="noopener noreferrer">{text}</a>);
            lastIndex = offset + match.length;
        });

        parts.push(description.slice(lastIndex));
        return parts;
    };

    return (
        <div className="card">
            <h1>{challenge.title}</h1>
            <p>{renderDescriptionWithLinks(challenge.description)}</p>
            <p><b>Points:</b> {challenge.points}</p>
            <p><b>Difficulty:</b> {challenge.difficulty}</p>
            <p><b>Category:</b> {challenge.category}</p>
            <p><b>Network:</b> {challenge.networkName}</p>

            {userAddress ? (
                <>
                    {challenge.transactionIdNeeded ? (
                        <>
                            <Text mb="sm">
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
                        <Text mb="sm">
                            No transaction ID is needed for this challenge. You can move to the next challenge by clicking "Next".
                        </Text>
                    )}
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

            {isChallengeVerified || !challenge.transactionIdNeeded ? (
                <Button onClick={nextChallenge}>Next</Button>
            ) : null}
        </div>
    );
};

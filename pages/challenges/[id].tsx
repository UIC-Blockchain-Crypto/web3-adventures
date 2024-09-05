import { challenges } from '@/lib/challenges'; // Import your challenges object
import { ChallengeCard } from '@/components/ChallengeCards/ChallengeCard';

export default function ChallengePage({ challenge }) {
    // If challenge is not found, render an error message
    if (!challenge) {
        return <div>Challenge not found</div>;
    }

    // Render the ChallengeCard component with the challenge data
    return <ChallengeCard challenge={challenge} />;
}

// Generates the paths for all challenges based on their id
export async function getStaticPaths() {
    // Create dynamic paths for each challenge
    const paths = challenges.map((challenge) => ({
        params: { id: challenge.id.toString() }, // use id as string
    }));

    return { paths, fallback: false };
}

// Fetches the data for a specific challenge using the id
export async function getStaticProps({ params }) {
    const { id } = params;

    // Find the challenge with the matching id
    const challenge = challenges.find((ch) => ch.id === parseInt(id, 10)) || null;

    return {
        props: {
            challenge, // Pass the challenge as a prop to the component
        },
    };
}

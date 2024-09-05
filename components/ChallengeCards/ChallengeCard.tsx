import { Button, Input } from "@mantine/core";

export const ChallengeCard = ({ challenge }) => {
    return (
        <div className="card">
            <h1>{challenge.title}</h1>
            <p>{challenge.description}</p>
            <p>Points: {challenge.points}</p>
            <p>Difficulty: {challenge.difficulty}</p>
            <p>Category: {challenge.category}</p>
            <Input placeholder="Enter your Transaction ID" />
            <Button>Submit</Button>
        </div>
    );
};

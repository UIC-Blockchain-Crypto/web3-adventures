import React, { useEffect, useState } from 'react';
import { Table } from '@mantine/core';
import { getScores } from '../../lib/scoreTable'; // Import the Firebase function

const ScoresTable = () => {
    const [scores, setScores] = useState([]);

    // Fetch scores in real-time when the component mounts
    useEffect(() => {
        // Call the getScores function and pass the setScores function
        const unsubscribe = getScores(setScores);

        // Cleanup the subscription when the component unmounts
        return () => {
            unsubscribe(); // Unsubscribe from Firestore listener
        };
    }, []);

    return (
        <div>
            <h2>User Scores</h2>
            {scores.length > 0 ? (
                <Table
                    horizontalSpacing="md"
                    verticalSpacing="sm"
                    table-layout="center"
                    style={{
                        borderRadius: '10px',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        marginTop: '20px',
                        marginBottom: '20px',
                        textAlign: 'center',
                        color: 'black',
                        background: 'white',
                    }}>
                    <Table.Thead style={{
                        margin: '10px',
                        padding: '20px',
                    }}>
                        <Table.Tr style={{ padding: '10px' }}>
                            <Table.Th>Ranking</Table.Th>
                            <Table.Th>Address</Table.Th>
                            <Table.Th>Score</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {scores.map((score) => (
                            <Table.Tr key={score.id}>
                                <Table.Th>{score.rank}</Table.Th>
                                <Table.Th>{score.id}</Table.Th>
                                <Table.Th>{score.points}</Table.Th>
                            </Table.Tr>
                        ))}
                    </Table.Tbody>
                </Table>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ScoresTable;

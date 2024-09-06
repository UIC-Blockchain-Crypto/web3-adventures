import { collection, getDoc, getDocs, getFirestore, onSnapshot, setDoc, doc, addDoc, where, query } from '@firebase/firestore';
import { app } from '../config/firebase';

const db = getFirestore(app);

interface Score {
    id: string;
    points: number;
}

// Fetch all scores, sort them by points and assign ranks
export const getScores = async (): Promise<Score[]> => {
    try {
        const snapshot = await getDocs(collection(db, 'scores'));
        let scores: Score[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as Score }));

        // Sort scores in descending order based on points
        scores.sort((a, b) => b.points - a.points);

        // Assign a rank to each user based on the sorted order
        scores = scores.map((score, index) => ({
            ...score,
            rank: index + 1,
        }));

        return scores;
    } catch (e) {
        console.error(e);
        return [];
    }
};

// Check if user already has a score entry by address
export const getScore = async (address) => {
    try {
        const docRef = doc(db, 'scores', address);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            return null;
        }
    } catch (e) {
        console.error(e);
        return null;
    }
};

// // Set a new score or update an existing one by adding points
// export const setScore = async (address, points) => {
//     try {
//         const docRef = doc(db, 'scores', address);
//         const docSnap = await getDoc(docRef);
//
//         let newScore;
//         if (docSnap.exists()) {
//             const currentScore = docSnap.data().points || 0;
//             newScore = currentScore + points;
//         } else {
//             newScore = points;
//         }
//
//         await setDoc(docRef, { points: newScore });
//         return { id: docRef.id, points: newScore };
//     } catch (e) {
//         console.error(e);
//         throw e;
//     }
// };

// Subscribe to score updates
export const subscribeToScores = (onUpdate, onError) => {
    const scoresQuery = collection(db, 'scores');
    const unsubscribe = onSnapshot(scoresQuery, (snapshot) => {
        const scores = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        onUpdate(scores);
    }, onError);
    return unsubscribe;
};

// Check if a transaction has been used already
export const checkIfTransactionUsed = async (transactionId: string) => {
    try {
        const q = query(collection(db, 'verifications'), where('transactionId', '==', transactionId));
        const querySnapshot = await getDocs(q);

        // If any documents are found, the transactionId has been used
        return !querySnapshot.empty;
    } catch (e) {
        console.error('Error checking transaction ID:', e);
        throw e;
    }
};

// Store the verification record in the 'verifications' collection
export const storeVerification = async (address: string, challengeNumber: number, transactionId: string, verified: boolean) => {
    try {
        const verificationDoc = {
            address,
            challengeNumber,
            transactionId,
            verified,
            timestamp: new Date(),
        };

        await addDoc(collection(db, 'verifications'), verificationDoc);
        return verificationDoc;
    } catch (e) {
        console.error('Error storing verification:', e);
        throw e;
    }
};

// Set a new score or update an existing one by adding points, with transaction verification
export const setScoreWithVerification = async (address: string, points: number, transactionId: string, challengeNumber: number) => {
    try {
        // Check if the transaction ID has already been used
        const isTransactionUsed = await checkIfTransactionUsed(transactionId);
        if (isTransactionUsed) {
            throw new Error('Transaction ID has already been used.');
        }

        // Proceed to check and update the user's score
        const docRef = doc(db, 'scores', address);
        const docSnap = await getDoc(docRef);

        let newScore;
        if (docSnap.exists()) {
            const currentScore = docSnap.data().points || 0;
            newScore = currentScore + points;
        } else {
            newScore = points;
        }

        // Update the score in Firestore
        await setDoc(docRef, { points: newScore });

        // Store the verification record
        const verificationRecord = await storeVerification(address, challengeNumber, transactionId, true);

        return { id: docRef.id, points: newScore, verificationRecord };
    } catch (e) {
        console.error(e);
        throw e;
    }
};


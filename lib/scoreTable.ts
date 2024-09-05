import {collection, getDoc, getDocs, getFirestore, onSnapshot, setDoc, doc} from '@firebase/firestore';
import { app } from '../config/firebase';

const db = getFirestore(app);

// Fetch all scores, sort them by points and assign ranks
export const getScores = async () => {
    try {
        const snapshot = await getDocs(collection(db, 'scores'));
        let scores = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

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

// Set a new score or update an existing one
export const setScore = async (address, score) => {
    try {
        const docRef = doc(db, 'scores', address);
        await setDoc(docRef, score);
        return { id: docRef.id, ...score };
    } catch (e) {
        console.error(e);
        throw e;
    }
};

// Subscribe to score updates
export const subscribeToScores = (onUpdate, onError) => {
    const scoresQuery = collection(db, 'scores');
    const unsubscribe = onSnapshot(scoresQuery, (snapshot) => {
        const scores = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        onUpdate(scores);
    }, onError);
    return unsubscribe;
};

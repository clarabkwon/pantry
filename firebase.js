import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyC_EPQUveQSPKDDrV1emapF6zLj1_6vqzo",
 authDomain: "pantry-889e6.firebaseapp.com",
 projectId: "pantry-889e6",
 storageBucket: "pantry-889e6.appspot.com",
 messagingSenderId: "209805467119",
 appId: "1:209805467119:web:fc40ce739f922043132a1a"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
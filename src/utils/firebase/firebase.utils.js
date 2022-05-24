import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection } from 'firebase/firestore';


const firebaseConfig = {
	apiKey: "AIzaSyBLCwepyGKXvf3l0zKsbI43AjgIXlbg5AY",
	authDomain: "crwn-clothing-db-6af00.firebaseapp.com",
	projectId: "crwn-clothing-db-6af00",
	storageBucket: "crwn-clothing-db-6af00.appspot.com",
	messagingSenderId: "142542898519",
	appId: "1:142542898519:web:162826f724b4257b4baa12"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid)

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, { displayName, email, createdAt });
		}
		catch (err) {
			console.log('Error creating user', err.message);
		}
	}

	return userDocRef;
}
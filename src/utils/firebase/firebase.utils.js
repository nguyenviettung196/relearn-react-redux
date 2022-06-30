import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDt8CL0oGupoSjUUGikjejp_35mrC1K4Ww",
	authDomain: "relearn-react.firebaseapp.com",
	projectId: "relearn-react",
	storageBucket: "relearn-react.appspot.com",
	messagingSenderId: "146136965676",
	appId: "1:146136965676:web:7db59235c6f4bcd9aca789",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);
	console.log(userDocRef);
	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	//if user not exist
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await setDoc(userDocRef, { displayName, email, createAt });
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}
	return userDocRef;
};

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: 'AIzaSyCtQawb5Uy9y_EYUmZ6m-5xjvbrckHFLmU',
    authDomain: 'crwn-db-b06a2.firebaseapp.com',
    databaseURL: 'https://crwn-db-b06a2.firebaseio.com',
    projectId: 'crwn-db-b06a2',
    storageBucket: 'crwn-db-b06a2.appspot.com',
    messagingSenderId: '273135464192',
    appId: '1:273135464192:web:0f239f777aeb666de40de5',
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserProfileDocument = async (userAuth, aditionalData) => {
    if (!userAuth) return;
    const { uid } = userAuth;
    const userRef = firestore.doc(`users/${uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...aditionalData,
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

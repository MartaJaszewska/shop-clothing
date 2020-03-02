import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAeg-ufEcfH1iVtaxgFIaXa6Evx6OKl1LA',
  authDomain: 'crwn-clothing-reactjs.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-reactjs.firebaseio.com',
  projectId: 'crwn-clothing-reactjs',
  storageBucket: 'crwn-clothing-reactjs.appspot.com',
  messagingSenderId: '698880554228',
  appId: '1:698880554228:web:300a9b1d6d594334da5aa1'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

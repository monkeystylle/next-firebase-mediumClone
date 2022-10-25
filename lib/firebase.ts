import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCH_xQSRFmoMc4TeEeAAZUesp34KJ4BRKs',
  authDomain: 'nextjs-firebase-9ecf7.firebaseapp.com',
  projectId: 'nextjs-firebase-9ecf7',
  storageBucket: 'nextjs-firebase-9ecf7.appspot.com',
  messagingSenderId: '423565795229',
  appId: '1:423565795229:web:9606f96af89b1e26e11974',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

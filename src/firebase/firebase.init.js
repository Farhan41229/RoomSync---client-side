// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCkoAf7MldG8VwZocgy5vqZ-npeXPhDLPg',
  authDomain: 'roomsync-229.firebaseapp.com',
  projectId: 'roomsync-229',
  storageBucket: 'roomsync-229.firebasestorage.app',
  messagingSenderId: '938389025289',
  appId: '1:938389025289:web:6e9b77372da24b4fd07ed8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

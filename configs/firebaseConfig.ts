// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: 'stdev-bdd45.firebaseapp.com',
	projectId: 'stdev-bdd45',
	storageBucket: 'stdev-bdd45.appspot.com',
	messagingSenderId: '909447250733',
	appId: '1:909447250733:web:5f044f8ed7c8a977b349a4',
	measurementId: 'G-921NW109MJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

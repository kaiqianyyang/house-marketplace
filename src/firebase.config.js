import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcpwxeVxSfFnNl2WMchr3R1ZyOo46TWUM",
  authDomain: "house-marketplace-app-a3349.firebaseapp.com",
  projectId: "house-marketplace-app-a3349",
  storageBucket: "house-marketplace-app-a3349.appspot.com",
  messagingSenderId: "686483046173",
  appId: "1:686483046173:web:647ac9545ed02d78972bf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()


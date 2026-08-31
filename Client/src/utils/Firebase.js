// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "ai-interviewiq-a1b3d.firebaseapp.com",
  projectId: "ai-interviewiq-a1b3d",
  storageBucket: "ai-interviewiq-a1b3d.firebasestorage.app",
  messagingSenderId: "675024205367",
  appId: "1:675024205367:web:7cf1a888b615e8922031b2",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//enable authentication here---
export const auth = getAuth(app);

//add a Provider here---
export const provider = new GoogleAuthProvider();

// export default { auth, provider };

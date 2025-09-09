import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxK8HSsEuWKcyQqK8KZJYzMFryb3r5cq8",
  authDomain: "test-firebase-authentica-9f16f.firebaseapp.com",
  projectId: "test-firebase-authentica-9f16f",
  storageBucket: "test-firebase-authentica-9f16f.firebasestorage.app",
  messagingSenderId: "28174880428",
  appId: "1:28174880428:web:12ad57ba9a32725c129909"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
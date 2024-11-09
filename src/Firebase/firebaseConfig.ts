import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCWVP8u8aVIrJlSh57uRZanPV9Czhkl97w",
  authDomain: "project-6f4cc.firebaseapp.com",
  projectId: "project-6f4cc",
  storageBucket: "project-6f4cc.firebasestorage.app",
  messagingSenderId: "7034155123",
  appId: "1:7034155123:web:a2f0ed3ae146068450fa06",
  measurementId: "G-TKBX6Q6DQ1"
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();
const provider = new GithubAuthProvider();

export { auth, provider };

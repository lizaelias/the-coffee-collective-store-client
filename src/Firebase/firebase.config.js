// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8jmbp63vbvWx7Drm9PexK8l8_QqPygz4",
  authDomain: "the-coffee-collective-bbb40.firebaseapp.com",
  projectId: "the-coffee-collective-bbb40",
  storageBucket: "the-coffee-collective-bbb40.appspot.com",
  messagingSenderId: "908001716232",
  appId: "1:908001716232:web:bc9ff8ed3002dae95c49bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
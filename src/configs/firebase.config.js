import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcDJzqLjqh6W__d3VKOXaGa-8HYEog7p8",
  authDomain: "mildmeal-app.firebaseapp.com",
  projectId: "mildmeal-app",
  storageBucket: "mildmeal-app.appspot.com",
  messagingSenderId: "327160257932",
  appId: "1:327160257932:web:c76ffa2c399b21f94a8aa9",
  measurementId: "G-3FLJHJS64F",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

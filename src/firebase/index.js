import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQ-a6WM5pHU-FP7HGZL6frAnzpuCcm1nI",
  authDomain: "vue-auth-ee1fa.firebaseapp.com",
  projectId: "vue-auth-ee1fa",
  storageBucket: "vue-auth-ee1fa.appspot.com",
  messagingSenderId: "430308744100",
  appId: "1:430308744100:web:76437ee2028737e626ff31"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
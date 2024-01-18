 import { initializeApp } from "firebase/app";
 import { getAuth, GoogleAuthProvider  } from "firebase/auth";
 import { getFirestore  } from "firebase/firestore";
 import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNe1Su2ykqyd_GmYPO9pwEOB13vFBwJ80",
  authDomain: "fir-course-9d047.firebaseapp.com",
  projectId: "fir-course-9d047",
  storageBucket: "fir-course-9d047.appspot.com",
  messagingSenderId: "156553474304",
  appId: "1:156553474304:web:9238b9b44168d925d643e5",
  measurementId: "G-334GMX0ZZP"
};

 
const app = initializeApp(firebaseConfig);
 
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage =  getStorage(app);
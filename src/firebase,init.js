
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDL66RKSr6aSOcawf-QICR_5biipfg08BE",
  authDomain: "assignment-12-ec4a7.firebaseapp.com",
  projectId: "assignment-12-ec4a7",
  storageBucket: "assignment-12-ec4a7.appspot.com",
  messagingSenderId: "949606465737",
  appId: "1:949606465737:web:dd6af328e08a95b4f2cd18"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
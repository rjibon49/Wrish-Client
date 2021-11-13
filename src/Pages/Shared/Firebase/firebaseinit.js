import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";


const initializationAuth = () => {
    initializeApp(firebaseConfig);
}

export default initializationAuth;
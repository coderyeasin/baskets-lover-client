import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const basketsInitialization = () => {
    initializeApp(firebaseConfig)
}

export default basketsInitialization;
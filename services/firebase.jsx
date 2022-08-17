
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD0-16AcDXI_d4m6ciW_lgmk-pJrbopDd0",
  authDomain: "crud-simples-da4c7.firebaseapp.com",
  projectId: "crud-simples-da4c7",
  storageBucket: "crud-simples-da4c7.appspot.com",
  messagingSenderId: "721374059598",
  appId: "1:721374059598:web:e45a6d26961db2343cb71f",
  measurementId: "G-YEG16M99GX"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
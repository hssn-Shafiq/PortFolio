// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCw2d4iYQgRfbIn1hzPX0WChUcfL19NNbU",
  authDomain: "hassan-portfolio-29d39.firebaseapp.com",
  projectId: "hassan-portfolio-29d39",
  storageBucket: "hassan-portfolio-29d39.appspot.com",
  messagingSenderId: "1010629991412",
  appId: "1:1010629991412:web:1e471ddb4c9913ad55b7a1",
  measurementId: "G-NMJDLVDJ99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export const SubmitForm = async (collectionName, data) => {

    try {
        const docRef = await addDoc(collection(db, collectionName), data);
        console.log("Data submitted successfully");
    } catch (error) {
     console.log("error while submitting", error.message);   
    }
}
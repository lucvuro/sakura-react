import { collection } from "firebase/firestore";
import { database } from "./firebase";

export const cardCollectionRef = collection(database, 'cards')
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB9WsWG3iYzmh-duS9B_mudIjGvza9BF24",
    authDomain: "earndeckshipping-74e83.firebaseapp.com",
    projectId: "earndeckshipping-74e83",
    storageBucket: "earndeckshipping-74e83.appspot.com",
    messagingSenderId: "1016086752123",
    appId: "1:1016086752123:web:43aec281b008db6c2eebde",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
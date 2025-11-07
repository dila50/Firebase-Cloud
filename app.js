// app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyRnlXGzoBuilIko5Rg8Yj53xbT-U5upc",
  authDomain: "fir-cloud-9b23b.firebaseapp.com",
  projectId: "fir-cloud-9b23b",
  storageBucket: "fir-cloud-9b23b.firebasestorage.app",
  messagingSenderId: "413818297755",
  appId: "1:413818297755:web:5ebc105007c8f941f4953e"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

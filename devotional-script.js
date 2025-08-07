// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, query, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi7dXkJjS0ZE4-T_8IHcaaOZJxqana2GE",
  authDomain: "daily-devotional-f3740.firebaseapp.com",
  projectId: "daily-devotional-f3740",
  storageBucket: "daily-devotional-f3740.firebasestorage.app",
  messagingSenderId: "510025428844",
  appId: "1:510025428844:web:c3b701340b75d175848d49",
  measurementId: "G-RMQ3J9G0JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const devotionalContent = document.getElementById('devotional-content');

// Function to fetch the latest devotional
async function getLatestDevotional() {
    try {
        const q = query(collection(db, "devotionals"), orderBy("date", "desc"), limit(1));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            devotionalContent.innerHTML = '<p>No devotionals found today. Please check back later!</p>';
            return;
        }

        querySnapshot.forEach((doc) => {
            const devotional = doc.data();
            devotionalContent.innerHTML = `
                <h2>${devotional.title}</h2>
                <p class="devotional-date">${devotional.date.toDate().toLocaleDateString()}</p>
                <p>${devotional.body}</p>
                <p><strong>Scripture:</strong> ${devotional.scripture}</p>
            `;
        });
    } catch (error) {
        console.error("Error fetching devotional: ", error);
        devotionalContent.innerHTML = '<p>There was an error loading the devotional. Please try again later.</p>';
    }
}

// Call the function to load the devotional when the page loads
getLatestDevotional();

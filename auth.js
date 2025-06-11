import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM1yr69XRR_wMSwajSuBojgZhWlT7yDmU",
  authDomain: "crop-prediction-c3c63.firebaseapp.com",
  projectId: "crop-prediction-c3c63",
  storageBucket: "crop-prediction-c3c63.appspot.com",
  messagingSenderId: "9929523653",
  appId: "1:9929523653:web:6f1a92656e611f496c8bac",
  measurementId: "G-EMDNP818F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign-up function
function SignUpUser(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Signed up:", userCredential.user.uid);
      alert("User signed up successfully!");
    })
    .catch((error) => {
      console.error("Error:", error.message);
      alert("Signup failed: " + error.message);
    });
}

// Login function
function LoginUser(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Logged in:", userCredential.user.uid);
      alert("User logged in successfully!");
      // Optional: Redirect after login
      // window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("Error:", error.message);
      alert("Login failed: " + error.message);
    });
}

// Wait for the DOM to load before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
  const signUp = document.getElementById('signup');
  if (signUp) signUp.addEventListener('click', SignUpUser);

  const login = document.getElementById('login');
  if (login) login.addEventListener('click', LoginUser);
});

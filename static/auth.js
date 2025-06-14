import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

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

// DOM elements
const authForms = document.getElementById('auth-forms');
const cropSection = document.getElementById('crop-section');
const navButtons = document.getElementById('nav-buttons');

// Signup
document.getElementById('signup-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (!email || !password) {
    showMessage("Please enter email and password", "#f44336");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      showMessage("Signed up successfully");
    })
    .catch(error => {
      showMessage("Signup failed: " + error.message, "#f44336");
    });
});

// Login
document.getElementById('login-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (!email || !password) {
    showMessage("Please enter email and password", "#f44336");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      showMessage("Logged in successfully");
    })
    .catch(error => {
      showMessage("Login failed: " + error.message, "#f44336");
    });
});

// Logout
document.getElementById('logout-btn').addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      showMessage("Logged out");
    })
    .catch(error => {
      showMessage("Error logging out: " + error.message, "#f44336");
    });
});

// Auth state change
onAuthStateChanged(auth, user => {
  if (user) {
    authForms.style.display = "none";
    cropSection.style.display = "block";
    navButtons.style.display = "flex";
  } else {
    authForms.style.display = "block";
    cropSection.style.display = "none";
    navButtons.style.display = "none";
  }
});

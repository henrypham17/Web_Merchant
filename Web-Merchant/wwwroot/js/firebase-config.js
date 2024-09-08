import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDvElvMoYmdpSJqnojtqj2E7T9jhWPRBC0",
    authDomain: "appfood-65df8.firebaseapp.com",
    projectId: "appfood-65df8",
    storageBucket: "appfood-65df8.appspot.com",
    messagingSenderId: "958159538020",
    appId: "1:958159538020:web:e9e9a2cd4a19d032231c71",
    measurementId: "G-5ECYR8EBLZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export function signInWithPhone(phone, password) {
    // Firebase chỉ hỗ trợ xác thực bằng email/password hoặc phone với OTP
    signInWithEmailAndPassword(auth, phone, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Login successful: ', user);
            // Redirect to Home page if successful
            window.location.href = "/Home/Index";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Login failed: ', errorMessage);
            alert("Login failed: " + errorMessage);
        });
}
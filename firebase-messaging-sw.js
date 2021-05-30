importScripts("https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.6.2/firebase-messaging.js")

const firebaseConfig = {
    apiKey: "AIzaSyALjuQftknR20RODrLa0yMFVruBHh0Gyy0",
    authDomain: "pushnet-799cf.firebaseapp.com",
    projectId: "pushnet-799cf",
    storageBucket: "pushnet-799cf.appspot.com",
    messagingSenderId: "526913197606",
    appId: "1:526913197606:web:b3bab79db26c71fc4a38e7",
    measurementId: "G-RRFTJPGJ45"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
});
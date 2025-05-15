// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

// ใส่ค่าการตั้งค่า Firebase ที่ได้จาก Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBCVqBP2vS4vR_i_u4IIbzcpUtDr_bZNyo",
  authDomain: "smartiot-932a9.firebaseapp.com",
  projectId: "smartiot-932a9",
  storageBucket: "smartiot-932a9.firebasestorage.app",
  messagingSenderId: "143339869873",
  appId: "1:143339869873:web:3bb0959d573bb7514b7490"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase;

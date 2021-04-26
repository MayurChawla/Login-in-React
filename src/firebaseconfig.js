import firebase from 'firebase';

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBeaOKV_xq6FIw5uzDBpnQRBXDKrsu4Ljw",
    authDomain: "login-dd2da.firebaseapp.com",
    projectId: "login-dd2da",
    storageBucket: "login-dd2da.appspot.com",
    messagingSenderId: "314323934118",
    appId: "1:314323934118:web:79d5f88608f7eea2530d67"
  };
  // Initialize Firebase
  const firebasee = firebase.initializeApp(firebaseConfig);

  export default firebasee;
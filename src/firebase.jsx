import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDqAhwfHDwEfb_LKG9t4yTvmy7MUvpmBdw",
  authDomain: "clone-613f3.firebaseapp.com",
  databaseURL: "https://clone-613f3.firebaseio.com",
  projectId: "clone-613f3",
  storageBucket: "clone-613f3.appspot.com",
  messagingSenderId: "612714600947",
  appId: "1:612714600947:web:cad1c5fdba0fef7cd1da86",
  measurementId: "G-4CGQBLFPNH"
});

const auth = firebase.auth();

export { auth };
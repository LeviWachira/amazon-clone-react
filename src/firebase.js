import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDFdsrCy5_kLxuToguktL_Ctha3E2rx27Y",
  authDomain: "clone-react-22a1e.firebaseapp.com",
  databaseURL: "https://clone-react-22a1e.firebaseio.com",
  projectId: "clone-react-22a1e",
  storageBucket: "clone-react-22a1e.appspot.com",
  messagingSenderId: "351767472183",
  appId: "1:351767472183:web:c57a7d7e66191e1df7f7b2",
  measurementId: "G-29CNXMM2VX",
});

const auth = firebaseApp.auth();

export { auth };

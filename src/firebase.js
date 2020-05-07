import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
// initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyA-s3mG99TqkIqvqv9H8vEviaUmfmoQNd4",
    authDomain: "vue-shop-a745d.firebaseapp.com",
    databaseURL: "https://vue-shop-a745d.firebaseio.com",
    projectId: "vue-shop-a745d",
    storageBucket: "vue-shop-a745d.appspot.com",
    messagingSenderId: "711309345379",
    appId: "1:711309345379:web:da29f02aef3a428cb9ee56",
    measurementId: "G-QTKMJEDHRQ"
};
  // firebase.initializeApp(firebaseConfig);

const fb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {fb,db}
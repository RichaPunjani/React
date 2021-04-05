import firebase from 'firebase';


const config={

    apiKey:
    authDomain: 
    databaseURL: 
    projectId: 
    storageBucket: 
    messagingSenderId: 
    appId: 
    measurementId:
  };
  if (!firebase.apps.length) { firebase.initializeApp(config); }
export const auth= firebase.auth;
export const db= firebase.database();
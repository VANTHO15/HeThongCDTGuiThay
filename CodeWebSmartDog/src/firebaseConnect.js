import  { initializeApp }  from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDGEqzPNr5Um_3wxWs8qPZQDTOHzzOeI3Q",
    authDomain: "smartdog-5e78b.firebaseapp.com",
    databaseURL: "https://smartdog-5e78b-default-rtdb.firebaseio.com",
    projectId: "smartdog-5e78b",
    storageBucket: "smartdog-5e78b.appspot.com",
    messagingSenderId: "212850743172",
    appId: "1:212850743172:web:35e71fff49756cdc866fd1",
    measurementId: "G-M410GZL5TE"
};
const firebaseConnect  = initializeApp(firebaseConfig);
export default firebaseConnect; 
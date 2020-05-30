import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyDd-ogH_GANeEoYLxof946Vvo_NhseiDzc",
    authDomain: "react-project-61eeb.firebaseapp.com",
    databaseURL: "https://react-project-61eeb.firebaseio.com",
    projectId: "react-project-61eeb",
    storageBucket: "react-project-61eeb.appspot.com",
    messagingSenderId: "89148997071",
    appId: "1:89148997071:web:c846f701a56e5c801866ba",
    measurementId: "G-W3XTW73TNK",
};

const fire = firebase.initializeApp(firebaseConfig);

export const database = fire.database();

export default fire;

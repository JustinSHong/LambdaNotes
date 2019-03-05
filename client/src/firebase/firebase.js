import firebase from "firebase/app";
import app from "firebase/app";

const config = {
    apiKey: "AIzaSyBuuBQAK5vymdGa_NhkpXBhF3puxeRXi8Q",
    authDomain: "lambdanotes2.firebaseapp.com",
    databaseURL: "https://lambdanotes2.firebaseio.com",
    projectId: "lambdanotes2",
    storageBucket: "lambdanotes2.appspot.com",
    messagingSenderId: "848304447874"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;

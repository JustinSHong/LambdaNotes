import firebase from "firebase/app";
import app from "firebase/app";
import "firebase/auth";

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
        this.auth = app.auth();
    }
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
}

export default Firebase;

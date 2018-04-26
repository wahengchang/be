const firebase = require('firebase')


var config = {
    apiKey: process.env.FIREBASE_API_KEY || window.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || window.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL || window.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID || window.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || window.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || window.FIREBASE_MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);

const init = () => {
    var config = {
        apiKey: process.env.FIREBASE_API_KEY || window.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN || window.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL || window.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID || window.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET || window.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || window.FIREBASE_MESSAGING_SENDER_ID,
    };
    firebase.initializeApp(config);
}

const signup = (email='', password='') => {
    return firebase.auth().createUserWithEmailAndPassword(email, password).then(
        user => user
    ,(err)=>{
        console.error(err)
        return err
    })
}

module.exports = {init, signup}

const firebase = require('firebase-admin')

firebase.initializeApp({
    credential: firebase.credential.cert(require("../service-account.json")),
    databaseURL: process.env.FIREBASE_DATABASE_URL
});

const database = firebase.database()
const ref = database.ref('Categorys')

const configList = ['影音', '運動', '文章', '2018', '2017', '2016']

return Promise.all(
    configList.map(
        item => 
            ref.push().set({name: item})
    )
)
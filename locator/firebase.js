module.exports = function(){
    return `
        window.FIREBASE_API_KEY =  "${process.env.FIREBASE_API_KEY}"
        window.FIREBASE_AUTH_DOMAIN =  "${process.env.FIREBASE_AUTH_DOMAIN}"
        window.FIREBASE_DATABASE_URL =  "${process.env.FIREBASE_DATABASE_URL}"
        window.FIREBASE_PROJECT_ID =  "${process.env.FIREBASE_PROJECT_ID}"
        window.FIREBASE_STORAGE_BUCKET =  "${process.env.FIREBASE_STORAGE_BUCKET}"
        window.FIREBASE_MESSAGING_SENDER_ID =  "${process.env.FIREBASE_MESSAGING_SENDER_ID}"
    `
}

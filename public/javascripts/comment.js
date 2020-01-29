var admin = require("firebase-admin");

var serviceAccount = require("./ServiceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://university-45734.firebaseio.com"
});

const db = admin.firestore();


var comments_area_list =  document.getElementsByClassName("comments-area");
console.log(comments_area_list)
console.log("a7a")
comments_area_list.array.forEach(element => {

    console.log(element)
});
const express = require("express");
const router = express.Router();
var admin = require("firebase-admin");

const db = admin.firestore();
router.get("/", (req, res) => {
  
    db.collection("posts").get().then((snapshot) => {
         docs = snapshot.docs
         db.collection("news").get().then((snapshot2) =>{
            news = snapshot2.docs
            /*
            docs.forEach( doc => {
                console.log("posts " +doc.data())
            });
            news.forEach( doc => {
                console.log("news " + doc.data())
            });
            */
            res.render("posts", { docs: docs, allNews : news });
        })  
    }) 
})

module.exports = router;



/*
  db.collection("comments").get().then((sanpshot) => {
        sanpshot.docs.forEach(doc => {
            data = doc.data();
            console.log(doc.id + " " + data);
        })
    })
<<<<<<< HEAD
*/

module.exports = router;


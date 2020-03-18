const express = require("express");
const router = express.Router();
var admin = require("firebase-admin");
const firebase = require("firebase")
const db = admin.firestore();
router.get("/news/:id", (req, res) => {
            
    db.collection("news").get().then((snapshot2)=>{
        news = snapshot2.docs
        res.render("news", {news:news , selectedNews : req.params.id});
    })

})

module.exports = router;
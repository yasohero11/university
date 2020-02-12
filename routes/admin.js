const express = require("express");
const router = express.Router();
var admin = require("firebase-admin");

const db = admin.firestore();


router.get("/admin", (req, res) => {

   
        res.render("admin");
    
})

module.exports = router;
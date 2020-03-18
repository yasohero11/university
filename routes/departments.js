const express = require("express");
const router = express.Router();
var admin = require("firebase-admin");
const firebase = require("firebase")
const db = admin.firestore();
router.get("/departments/:id", (req, res) => {
            
            db.collection("departments").doc(req.params.id).get().then((doc)=>{                
                res.render("department" , {dep:doc.data()});
            })

})

module.exports = router;
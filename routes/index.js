const express = require("express");
const router = express.Router();
var admin = require("firebase-admin");

const db = admin.firestore();
/*
db.collection("professors").add({
    name: "Essam Elewa",
    title:"DR",
    description:"Dr.Essam Elewa is professor tech programming languages and consepets",
    imageUrl:"https://media-exp1.licdn.com/dms/image/C5103AQGE4B4V86rZSQ/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=iOdEU7dKp8yjJd5waizJjBWd_cn5iMP6f_eQ-TAmTTw",
    depratments:["cs"],
    twitter:"https://",
    mail:"https://",
    linkedin:"https://"
})
*/
function addProfessor(name,title,description,imageUrl,depratments,twitter,mail,linkedin){
    db.collection("professors").add({
        name: name,
        title:title,
        description:description,
        imageUrl:imageUrl,
        depratments:depratments,
        twitter:twitter,
        mail:mail,
        linkedin:linkedin
    }).then(console.log("added"))    
}
/*
addProfessor("Essam Elewa","DR","Dr.Essam Elewa is professor tech programming languages and consepets",
"https://media-exp1.licdn.com/dms/image/C5103AQGE4B4V86rZSQ/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=iOdEU7dKp8yjJd5waizJjBWd_cn5iMP6f_eQ-TAmTTw",
["cs"],"https://","https://","https://");

addProfessor("Crews tery","Acctor","black acctor","https://www.famousbirthdays.com/faces/crews-terry-image.jpg",["actor"],"https://","https://","https://")
*/
router.get("/", (req, res) => {

    db.collection("professors").get().then((snapshot) => {
        professors = snapshot.docs
    }).then(()=>{
        db.collection("news").get().then((snapshot2)=>{
            news = snapshot2.docs
            res.render("index", { professors:professors , news:news});
        })
        
    })
})

module.exports = router;
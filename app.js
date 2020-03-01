const express = require("express");
const app =  express();
const path = require("path")
const bodyParser = require('body-parser');
var admin = require("firebase-admin");
var firebase =  require("firebase");
var serviceAccount = require("./ServiceAccount.json");

firebase.initializeApp({
  apiKey: "AIzaSyDLSerwfjmloXdFHOKiTwUvc0LdLgSAPQs",
  authDomain: "university-45734.firebaseapp.com",
  databaseURL: "https://university-45734.firebaseio.com",
  projectId: "university-45734",
  storageBucket: "university-45734.appspot.com",
  messagingSenderId: "694823147172",
  appId: "1:694823147172:web:970f883121c3e21ba3f831",
  measurementId: "G-F24T378RP7"
})

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://university-45734.firebaseio.com"
});
const db = admin.firestore();
app.use(express.static(path.join(__dirname, 'public/assets')))
app.use(express.static(path.join(__dirname)))
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require("./routes/index"));
app.use(require("./routes/posts"));
app.use(require("./routes/admin"));
app.use(require('./routes/signup'));

/*  access a subcollection
db.collection("posts").doc("EEjdmoOPlOfcyryBVaSO").collection('comments').get().then((doc)=>{
    doc.docs.forEach(doc =>{
        console.log(doc.data())
    })
})

*/
/*
function getTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes +ampm;
    return strTime;
  }
  function getCurrentDate( date){
    var today = (date.getMonth()+1)+'-'+date.getDate()+'-'+date.getFullYear();
    return today;
  }

function addNewPost(imagePath ,title, text ){
    var date = new Date();
    
    var dateTime = getCurrentDate(date)+' '+ getTime(date);
    
    db.collection('posts').add({
        date: dateTime,
        title: title,
        text: text,
        imagePath: imagePath,
        comments:[]
    }).then((doc)=>{
      console.log(doc.id + " is been added to the database")
    })
}

function addNewComment(post_id , user_name , text){
  var date = new Date();  
  var dateTime = getCurrentDate(date)+' '+ getTime(date);
  db.collection('posts').doc(post_id).update({
    comments : admin.firestore.FieldValue.arrayUnion(
      {
        user_id : 1,
        user_name : user_name,
        date : dateTime,
        text : text
    
      }
    )
  }).then(()=> console.log("done"))
}


function addNewReply(post_id, comment_id , user_name , text){
  var date = new Date();  
  var dateTime = getCurrentDate(date)+' '+ getTime(date);
  db.collection('posts').doc(post_id).update({
    comments : admin.firestore.FieldValue.arrayUnion(
      {
        user_id : 1,
        user_name : user_name,
        date : dateTime,
        text : text
    
      }
    )
  }).then(()=> console.log("done"))




}
*/
/*
let museums = db.collectionGroup('comments').where('comment_id', '==', '1');
museums.get().then(function(querySnapshot) {
querySnapshot.forEach(function(doc) {
  console.log(doc.id, ' => ', doc.data().text);
});
});
*/
/*
addNewComment("UiIZawjDAGtOHU1thLpm", "putien" , "мать твою, я тебя всех убью")
addNewComment("UiIZawjDAGtOHU1thLpm", "youssef" , "пожалуйста, мастер, не делайте, мы хорошие люди")
addNewComment("UiIZawjDAGtOHU1thLpm", "putien" , "Я начну ядерную миссию в Египте, чтобы быть более точным в нашем городе только для себя")
*/



//setNewPost("https://cdn.cnn.com/cnnnext/dam/assets/191203174105-edward-whitaker-1-large-169.jpg", "post7" , "title title title title")
/*
db.collection("posts").get().then((snapshot) => {
  
    snapshot.docs.forEach( doc =>{
        console.log(doc.id + " " + doc.data().comments[0].date)
    })
    
})

*/
//setNewPost("https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687","A text editor is a type of computer program that edits plain text. Such programs are sometimes known as  software, following the naming of Microsoft ...")


/*
db.collection("posts").doc("EEjdmoOPlOfcyryBVaSO").get().then(( doc )=>{
  


    doc.data().comments[0].replys.update({
      
    })
})
*/

/*
usersTabel.set({
  first: 'ahmed',
  middle_name : 'khaled',
  last: 'mohamed',
  born: 1998
});

*/

/*
db.collection('users').add({
    first:"khaled",
    last:"ahmed",
    born: 2005
}).then(doc =>{
    console.log("document ID is : " + doc.id)
})
  */
 /*
 db.collection('users').doc("tVWsBb5uMz1FdbfFpVKy").update({
    born: 12
 })
 */

/*
 db.collection('users').doc("tVWsBb5uMz1FdbfFpVKy").get()
 .then(doc => {
   if (!doc.exists) {
     console.log('No such document!');
   } else {
     console.log('Document data:', doc.data());
   }
 })
 .catch(err => {
   console.log('Error getting document', err);
 });
 */





app.listen(3000, ()=>{
    console.log("listening on PORT 3000")
})

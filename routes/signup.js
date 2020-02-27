const express = require('express');

const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
var admin = require("firebase-admin");
const firebase = require("firebase")
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

const db = admin.firestore();
const auth = firebase.auth()

router.get('/signup', (req, res, next) => {
    res.render('signup')
});
router.get('/signin', (req, res, next) => {
    res.render('signup')
});


router.get("/signin/google" , (req,res,next)=>{
  var googleAuthProvider =  new firebase.auth.GoogleAuthProvider;

  firebase.auth().signInWithPopup(googleAuthProvider)
                    .then((data)=>{
                        console.log(data)
                    }).catch((err)=>{
                        console.log(err)
                    })
})



router.post('/signup', (req, res, next) => {
    var email = req.body.signupemail;
    var password = req.body.signuppassword;
    
    
    auth.createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                console.log('The password is too weak.');
            } else {

                console.log(errorMessage);


            }
            console.log(error);


        });
    res.redirect('/signin');
    
});

router.post('/signin', (req, res, next) => {

    var loginemail = req.body.loginemail;
    var loginpassword = req.body.loginpassword;
    const promise = auth.signInWithEmailAndPassword(loginemail, loginpassword).then(()=>{
        console.log(loginemail + ' ' + loginpassword)
    })

    promise.catch(e => {
        alert(e.message);
        res.redirect('/signin')
    })
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            res.redirect('/')
        }
    })
    
});



module.exports = router;
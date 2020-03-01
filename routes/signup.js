const express = require('express');

const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
var admin = require("firebase-admin");
const firebase = require("firebase")
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
    const promise = auth.signInWithEmailAndPassword(loginemail, loginpassword).then((user)=>{
       // console.log(loginemail + ' ' + loginpassword)
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

router.get("/logout",(req, res, next)=>{
    auth.signOut()
         
})

module.exports = router;
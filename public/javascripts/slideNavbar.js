$(document).ready(() => {

       
            
    var authBtn = $("#login");
    
    authBtn.on("click" , ()=>{
      
      if(authBtn.text() == "login" ){                
      firebase.auth().signInWithPopup(provider).then(function(result) {
          var token = result.credential.accessToken;
          var user = result.user;

      }).catch(function(error) {
        console.log(error)
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
    
      });
    }else{
      auth.signOut().then(()=>authBtn.text("login"));              
    }
    })
    auth.onAuthStateChanged( (user) =>{
            if(user){
              console.log(user)
              authBtn.text("Logout")
            }
    })
    

        $(window).resize(function () {
        if (($(window).width() <= 766)) {
        $("#show-on-col").show();
        $("#hide-on-col").hide();
        } else {
        $("#show-on-col").hide();
        $("#hide-on-col").show();
        }
    });

    $(window).scroll(() => {
        if ($(window).scrollTop() > 50) {
        $("#mynav").addClass("sticky-top")
        } else {
        $("#mynav").removeClass("sticky-top")
        }
    })  
})
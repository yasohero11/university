
var list = document.getElementsByClassName("myform");
var disList = document.getElementsByClassName("dis");
let password = document.getElementById("password2");
let confimation = document.getElementById("confirm");
let passDis = document.getElementById("passDis");
let confirmDis = document.getElementById("confirmDis");
let loginemail = document.getElementById("email");
let passsemail = document.getElementById("pwd");
let logdis = document.getElementById("logdis");
let loginPssDis = document.getElementById("loginPassDis");
let emailFeild = list[1];
let loginForm =  document.getElementById("loginForm");
let signupForm =  document.getElementById("signupForm");





 

signupForm.addEventListener("submit" , (e)=>{
  e.preventDefault();
  if(isValid()){
    
    auth.createUserWithEmailAndPassword(emailFeild.value, password.value).then(()=>{
      window.location.href = "/signup"
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') 
            console.log('The password is too weak.');
        else 
            console.log(errorMessage);

        console.log(error);
    });
  }
})


loginForm.addEventListener("submit" , (e)=>{
  e.preventDefault();
  auth.signInWithEmailAndPassword(loginemail.value, passsemail.value).then((user)=>{
    console.log(auth.currentUser)
   // window.location.href = "/"
  }).catch(e => {
    alert(e.message);
    res.redirect('/signin')
})

  
})









function containAlphabets(text) {
  regex = /^[A-Z a-z]+$/;
  for (let i = 0; i < text.length; i++) {
    if (regex.test(text.charAt(i)))
      return true;
  }
  return false;
}
function containNmbers(text) {
  regex = /^[0-9@.*!$%]+$/;
  for (let i = 0; i < text.length; i++) {
    if (regex.test(text.charAt(i)))
      return true;
  }
  return false;
}
function removeSpaces(text) {
  if (text.value.indexOf(" ") != -1) {
    text.value = text.value.replace(/\s/g, '');        // to remove spaces from the textfeild
    return true;
  }
  return false;
}

function isEpmpty(text) {
  
  if (text.value == "" || text.value == null)
    return true;

  return false;
}

function cheackEmail() {
  let dis = disList[1];

  if (!isEpmpty(emailFeild)) {
    if (emailFeild.value.indexOf('@') == -1) {
      dis.innerHTML = "You forgot to put @";
      dis.style.borderBottom = "#E93535 solid 2px"
    }
    else if (emailFeild.value.indexOf('.') == -1) {
      dis.innerHTML = "You forgot to put .";
      dis.style.borderBottom = "#E93535 solid 2px"
    }
    else if (emailFeild.value.indexOf(".com") == -1) {
      dis.innerHTML = "You forgot to put .com";
      dis.style.borderBottom = "#E93535 solid 2px"
    }
  }else{
    dis.innerHTML = "Empty"
    dis.style.borderBottom = "#FC8C1B solid 2px";
  }
}
function checkPassword() {
  if (!isEpmpty(password)) {
    if (containAlphabets(password.value) && containNmbers(password.value) && (password.value.length >= 6)) {
      passDis.innerHTML = "Strong"
      passDis.style.borderBottom = "#54F26C solid 2px"
    } else {
      passDis.innerHTML = "Weak"
      passDis.style.borderBottom = "#E93535 solid 2px"
    }
    if (removeSpaces(password)) {
      passDis.innerHTML = "A space been removed"
      passDis.style.borderBottom = "#54F26C solid 2px"
    }
     
  } else {
    passDis.innerHTML = "Empty"
    passDis.style.borderBottom = "#FC8C1B solid 2px";
  }

  if (!isEpmpty(confimation)) {
    if ((confimation.value == password.value)) {
      confirmDis.innerHTML = "All Good!"
      confirmDis.style.borderBottom = "#54F26C solid 2px"
    }
    else {
      confirmDis.innerHTML = "Not The Same"
      confirmDis.style.borderBottom = "#E93535 solid 2px"
    }

    if (removeSpaces(confimation)) {
      confirmDis.innerHTML = "A space been removed"
      confirmDis.style.borderBottom = "#54F26C solid 2px"
    }
  } else {
    confirmDis.innerHTML = "Empty"
    confirmDis.style.borderBottom = "#FC8C1B solid 2px";
  }
}


for (let i = 0; i < list.length; i++) {
  let textFeild = list[i];
  let message = disList[i];
  //let order = i;
  var regex = /^[A-Z a-z 0-9@.]+$/
  textFeild.addEventListener("focusout", () => {
    if (textFeild.value == "" || textFeild.value == null) {
      message.innerHTML = "Empty";
      message.style.borderBottom = "#FC8C1B solid 2px"
      // disableForms(order+1);
    }
    else if (!regex.test(textFeild.value)) {
      message.innerHTML = "None since";
      message.style.borderBottom = "#E93535 solid 2px";
      //disableForms(order+1);
    }
   
    else {
      message.innerHTML = "All Good!";
      message.style.borderBottom = "#54F26C solid 2px";
      //list[order+1].disabled = false;

    }
    removeSpaces(textFeild);


  })
}







emailFeild.addEventListener("focusout", () => { cheackEmail() })

password.addEventListener("focusout", () => {
  checkPassword()
})

confimation.addEventListener("focusout", () => {
  checkPassword()
})




function checkLogin() {
  console.log(isEpmpty(loginemail) + " hreeee " + isEpmpty(passsemail))
  if (isEpmpty(loginemail) &&  isEpmpty(passsemail)) {
    logdis.innerHTML = "Empty";
    loginPssDis.innerHTML = "Empty";
    logdis.style.borderBottom = "#FC8C1B solid 2px"
    loginPssDis.style.borderBottom = "#FC8C1B solid 2px"
    return false
  }
  else if (isEpmpty(passsemail)) {
    loginPssDis.style.borderBottom = "#FC8C1B solid 2px"
    loginPssDis.innerHTML = "Empty"
    return false
  }
  else if (isEpmpty(loginemail)) {
    logdis.innerHTML = "Empty";
    logdis.style.borderBottom = "#FC8C1B solid 2px"
    return false
  }
  
  return true

}
function isValid() {
  cheackEmail();
  checkPassword();
  for (let i = 0; i < disList.length; i++){
    if (disList[i].style.borderBottom != "2px solid rgb(84, 242, 108)")
      return false;
  }

  return true;
}


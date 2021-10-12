firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("login_div").style.display = "none";
    document.getElementById("registration_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){
      window.location.href = "main.html";

      //var uid = user.uid;
      //var email_id = user.email;
      //document.getElementById("user_para").innerHTML = "Welcome User : " + uid + "\n" + email_id;
    }

  } else {
    // No user is signed in.

    document.getElementById("login_div").style.display = "block";
    document.getElementById("registration_div").style.display = "none";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
}

function back_to_login(){

  document.getElementById("login_div").style.display = "block";
  document.getElementById("registration_div").style.display = "none";
}

function registration(){

  document.getElementById("login_div").style.display = "none";
  document.getElementById("registration_div").style.display = "block";
}

function createaccount() {

  var email = document.getElementById("register_email").value;
  var password = document.getElementById("register_password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    console.log(error.code);
    console.log(error.message);
  });
 }

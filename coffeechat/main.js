firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

      var user = firebase.auth().currentUser;
  
      if(user != null){
        
        var uid = user.uid;
        var email_id = user.email;
        document.getElementById("user_para").innerHTML =  uid + "<br>" + email_id;
      }
  
    } else {
      // No user is signed in.
  
      window.location.href = "index.html";
  
    }
  });

function logout(){
    firebase.auth().signOut();
    window.location.href = "index.html";
}
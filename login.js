var checkbox = false;
var count = 0;
  
function keep() {
   if (count % 2 == 0) {
     checkbox = true;
   } else {
     checkbox = false;
   }
   count++;
}
  
  function pressed() {
    let user = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
  
    if (user == "shiva@gmail.com" && pass == "hello") {
      alert("sucessfully login");
     window.open('user-account.html');
    } else {
      alert("try again!");
    }
  
    if (checkbox) {
      //do nothing
    } else {
      document.getElementById("email").value = null;
      document.getElementById("pass").value = null;
    }
  }
  
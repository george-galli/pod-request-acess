
function validateEmail(inputText) {
  var emailPress = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  if (!inputText.match(emailPress)) {
      var errorMail = document.getElementById("error");
      errorMail.style.display = "block";
      return false;
  }
  return true;
}
var clipboard = new Clipboard('.copy')
var lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789",
  symbol = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  lowercaseInput = document.getElementById("lowercase"),
  uppercaseInput = document.getElementById("uppercase"),
  punctuationInput = document.getElementById("symbol"),
  numbersInput = document.getElementById("number"),
  lengthInput = document.getElementById("length"),
  passwordFeild = document.getElementById("pass-field"),
  generateButton = document.getElementById("generate"),
  copyButton = document.getElementById("copy"),
  plength,
  userPassword,
  passwordCharSet;
 
function generate() {
  userPassword = "";
  passwordCharSet = "";
  if (lowercaseInput.checked) {
    passwordCharSet += lowercase;
  }
  if (uppercaseInput.checked) {
    passwordCharSet += uppercase;
  }
  if (punctuationInput.checked) {
    passwordCharSet += symbol;
  }
  if (numbersInput.checked) {
    passwordCharSet += numbers;
  }
  plength = Number(lengthInput.value);
 
  for (let i = 0; i < plength; i++) {
    userPassword += passwordCharSet.charAt(
      Math.floor(Math.random() * passwordCharSet.length)
    );
  }
  if (userPassword == "") {
    let alertbox = document.getElementById('alert');
    alertbox.innerHTML = "Please select an option before generating"
    alertbox.classList.add('fail');
    setTimeout(function(){ 
      alertbox.classList.remove('fail');
    }, 3000);
  } else {
    passwordFeild.innerHTML = userPassword;
  }
  copyButton.setAttribute("data-clipboard-text", userPassword)
}
generateButton.addEventListener("click", generate);
 

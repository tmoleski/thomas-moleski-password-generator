// all characters and options for password 
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "'", "+", "-", ".", ":", ";", ",", "/", "<", ">", "=", "?", "{", "}", "|", "~"];


function generatePassword() {


  //questions to ask user 
  numberOfDigits = prompt("How many characters would you like your password to contain?");
  if (numberOfDigits < 8 || numberOfDigits > 128) {
    prompt("Your password must be more than 8 characters or less than 128 characters");
  }
  else {
    alert("Your password will be " + numberOfDigits + " characters");
  }


  returnUpperCase = confirm("Do you want to use upper case letters?");
  if (returnUpperCase === true) {
    alert("Password will contain Upper Case letters!");
  }
  else {
    alert("Password will not contain Upper Case");
  }
  returnLowerCase = confirm("Do you want to use lower case letters?");
  if (returnLowerCase === true) {
    alert("Password will contain Lower Case Letters!");
  }
  else { 
    alert("Password will not contain Lower Case Letters!");
  }  

  returnNumbers = confirm("Do you want to use Numbers?");
  if (returnNumbers === true) {
    alert("Password will contain Numbers!");
  }
  else {
    alert("Password will not contain Numbers!");
  }

  returnSpecial = confirm("Do you want to use Special Characters?");
  if (returnSpecial === true) {
    alert("Password will contain Special Characters!");
  }
  else {
    alert("Password will not contain Special Characters!");
  }

  if (returnUpperCase === false && returnLowerCase === false && returnNumbers === false && returnSpecial === false) {
    alert("You must click 'OK' for one of the options");
  }
//combine variables to choose characters
  let combine = [];
  if (returnUpperCase === true) {
    combine += upperCase;
  }
  if (returnLowerCase === true) {
    combine += lowerCase;
  }
  if (returnNumbers === true) {
    combine += numbers;
  }
  if (returnSpecial === true) {
    combine += special;
  }

  console.log(combine);  //combines selected items based on whether click "ok" or "cancel"
    


  



}
// Assignment Code
var generateBtn = document.querySelector("#generate");
//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



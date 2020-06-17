// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays holding different queries
var queryies= [];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numerics = ['0','1','2','3','4','5','6','7','8','9'];
var specials = [ "+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":","!","@","#","%"];

// function that runs
function generatePassword(){
  var finalPassword = "";
  var length = prompt("Enter the desired length of your password between 8 and 128 characters.");
  if(verifyLength(length)===false){
    return alert("Please press the Generate Password button again to start over.");
  }
  // These all have boolean values
  var lower = confirm("Include lowercase letters?");
  var caps = confirm("Include capital letters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");

  console.log(caps);
  console.log(length);

}

// function verifying responses from the user
function verifyLength(length){
  var num = parseInt(length);
  if(num>128){
    alert("Length cannot be over 128 characters.");
    return false;
  }
  if(num<8){
    alert("Length has to be at least 8 characters long.");
    return false;
  }
  
}
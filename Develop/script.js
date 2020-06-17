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

// Arrays holding different queries and are declared globally

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numerics = ['0','1','2','3','4','5','6','7','8','9'];
var specials = [ "+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":","!","@","#","%"];

// function that runs when the button is clicked
function generatePassword(){
  var queries =[];
  var finalPassword = "";
  var length = prompt("Enter the desired length of your password between 8 and 128 characters.");
  // verifies that the submitted length meets the criteria.
  while(verifyLength(length)===false){
    // alert("Please press the generate password button to restart.");
    var length = prompt("Enter the desired length of your password between 8 and 128 characters.");
  }
  // These all have boolean values
  var lower = confirm("Include lowercase letters?");
  // if they include the desired type then the array holding the type of characters is pushed to the queries array which possess all of the arrays for the password
  if(lower === true){
    queries.push(lowerCase);
  }
  var caps = confirm("Include capital letters?");
  if(caps===true){
    queries.push(upperCase);
  }
  var numeric = confirm("Include numeric characters?");
  if(numeric===true){
    queries.push(numerics);
  }
  var special = confirm("Include special characters?");
  if(special===true){
    queries.push(specials);
  }  
  console.log(queries);
  var lengthInt = parseInt(length);
  // this adds a character that is randomly chosen from the queries array
  for(var i=0;i<lengthInt;i++ ){
    // arrayNum is an integer which is randomly generated and dictates which array is going to be selected
    var arrayNum = Math.floor(Math.random()*queries.length);
    console.log(queries[arrayNum].length);
    // this generates a random character from the array randomly chosen and adds it the originally empty string of finalPassword
    finalPassword += queries[arrayNum][Math.floor(Math.random()*queries[arrayNum].length)]
  }
  console.log(finalPassword);
  return finalPassword;

}

// function verifying responses from the user
function verifyLength(length){
  // checks if the text in the box is empty
  if(length===""){
    alert("ERROR: Please submit a value in the text box.");
    return false;
  }
  // converts the submitted string to an integer
  var num = parseInt(length);
  console.log(num);
  // If the user submits a string with no numbers then this message is returned
  if(Number.isNaN(num)){
    alert("ERROR: Please only submit numbers and not other characters.")
    return false;
  }
  // Verifies that the number is within the given criteria
  if(num>128){
    alert("ERROR: Length cannot be over 128 characters.");
    return false;
  }
  if(num<8){
    alert("ERROR: Length has to be at least 8 characters long.");
    return false;
  }  
}
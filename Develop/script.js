// Assignment code here
var lowercase=  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers= [0,1,2,3,4,5,6,7,8,9]
var specialCharacters= ["#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~" ]

var passwordSelections= []

var generatePassword = function() {
var passwordLength = window.prompt("Please select the length of your password. Minimum of characters and Maximum of 128 characters.");
if (passwordLength > 8 && passwordLength < 128) {
  window.alert( "Your " + passwordLength + " character password will be created.");}
else {
  window.alert("Password length doesn't meet company security standards. Please select a number between 8 and 128.");
generatePassword();
}

var confirmLowercase = window.confirm(" Do you want to include lower case letters?");
if (confirmLowercase) {
  var randomLowercase= getRandom(lowercase)
  passwordSelections.push (randomLowercase)
//window.alert ("Lower case letters will be included in your password");
}

var confirmUppercase = window.confirm( " Do you want to include upper case letters?");
if (confirmUppercase) {
  var randomUppercase= getRandom(uppercase)
  //window.alert("Upper case letters will be included in your password");
 passwordSelections.push(randomUppercase)
};

var confirmNumbers = window.confirm (" Do you want to include numbers in your password?");
if (confirmNumbers) {
  var randomNumber =getRandom(numbers)
  passwordSelections.push(randomNumber)
};

var confirmSpecialCharacters= window.confirm(" Do you want to include special characters in your password?");
if (confirmSpecialCharacters) {
  var randomCharacter = getRandom(specialCharacters)
  passwordSelections.push(randomCharacter)
};

//for (var i = 0; i < passwordLength; i++) {
  //var chosenCharacters =
 // passwordSelections[Math.floor(Math.random() * passwordLength)];
 // };
  console.log(passwordSelections)
return chosenCharacters

}
var getRandom= function(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomElement = arr[randomIndex]
  return randomElement
}


//for (var i = 0; i < passwordLength; i++) {
//var chosenCharacters =
//passwordSelections[Math.floor(Math.random() * passwordLength)];
//};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log([passwordText])
return passwordText.value
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

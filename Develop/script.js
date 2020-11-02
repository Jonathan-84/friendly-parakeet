// Assignment code here
var lowercase=  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers= [0,1,2,3,4,5,6,7,8,9]
var specialCharacters= ["#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~" ]

//var userChoices= {
  // length: passwordLength,
   //characters: confirmLowercase, confirmUppercase, confirmSpecialCharacters, confirmNumbers

   //return userChoices;  
//};

var userChoices= {
  lowercase: undefined,
  uppercase: undefined,
  numbers: undefined,
  specialCharacters: undefined,
  length: undefined
};

//var selectedCharacters="";

var selectionCriteria= function() {
var passwordLength = window.prompt("Please select the length of your password. Minimum of characters and Maximum of 128 characters.");
if (passwordLength > 7 && passwordLength < 129) {
  window.alert( "Your " + passwordLength + " character password will be created.");
 userChoices.length = passwordLength;}
else {
  window.alert("Password length doesn't meet company security standards. Please select a number between 8 and 128.");
}


var confirmLowercase = window.confirm(" Do you want to include lower case letters?");
//if (confirmLowercase) {
  //var randomLowercase= getRandom(lowercase)
  userChoices.lowercase = confirmLowercase;
//window.alert ("Lower case letters will be included in your password");
//if (userChoices.lowercase) {
  //selectedCharacters += lowercase
//}


var confirmUppercase = window.confirm( " Do you want to include upper case letters?");
//if (confirmUppercase) {
  //var randomUppercase= getRandom(uppercase)
  //window.alert("Upper case letters will be included in your password");
userChoices.uppercase = confirmUppercase;
//if (userChoices.uppercase) {
  //selectedCharacters+= uppercase
//}

var confirmNumber = window.confirm (" Do you want to include numbers in your password?");
//if (confirmNumbers) {
  //var randomNumber =getRandom(numbers)
  userChoices.numbers= confirmNumber;
//if (userChoices.specialCharacters){
 // selectedCharacters += numbers
//}

var confirmSpecialCharacter= window.confirm(" Do you want to include special characters in your password?");
//if (confirmSpecialCharacters) {
  //var randomCharacter = getRandom(specialCharacters)
  userChoices.specialCharacters = confirmSpecialCharacter;
  //if (userChoices.specialCharacters){
  //   selectedCharacters+= specialCharacters
//}

return selectionCriteria()

};
//for (var i = 0; i < passwordLength; i++) {
//var chosenCharacters =
 //passwordSelections[Math.floor(Math.random() * passwordLength)];
 //};
  //console.log(passwordSelections)
//return chosenCharacters


//Generated password needs to be commented back in after changes are made
var generatePassword = function() {
  selectionCriteria();
  console.log(userChoices.length);
  //var selectedCharacters="";

  //if (userChoices.specialCharacters){
    //selectedCharacters+= specialCharacters}
  //if (userChoices.specialCharacters){
    // selectedCharacters += numbers}
     //if (userChoices.uppercase) {
      //selectedCharacters+= uppercase}
      //if (userChoices.lowercase) {
       // selectedCharacters += lowercase
      //}

 //for (var i = 0; i < userChoices.length; i++) {
 //generatePassword = generatePassword+selectedCharacters(Math.floor(Math.random() * userChoices.length));
   //console.log(userChoices) 
  //}
  return generatePassword();

};

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
// Assignment code here
var lowercase=  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers= ["0","1","2","3","4","5","6","7","8","9"]
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



var selectionCriteria= function() {
var passwordLength = window.prompt("Please select the length of your password. Minimum of characters and Maximum of 128 characters.");
if (passwordLength > 7 && passwordLength < 129) {
  window.alert( "Your " + passwordLength + " character password will be created.");
 userChoices.length = passwordLength;}
else {
  window.alert("Password length doesn't meet company security standards. Please select a number between 8 and 128.");
}

var confirmSpecialCharacter= window.confirm(" Do you want to include special characters in your password?");
    userChoices.specialCharacters = confirmSpecialCharacter;
  //  if (userChoices.specialCharacters == true){
    //selectedCharacters+= specialCharacters
  //}
    var confirmNumber = window.confirm (" Do you want to include numbers in your password?");
    userChoices.numbers= confirmNumber;
  //if (userChoices.specialCharacters == true){
    //selectedCharacters += numbers
  //}
    var confirmUppercase = window.confirm( " Do you want to include upper case letters?");
    userChoices.uppercase = confirmUppercase;
    // if (userChoices.uppercase == true) {
      //selectedCharacters+= uppercase
  //}
      var confirmLowercase = window.confirm(" Do you want to include lower case letters?");
      userChoices.lowercase = confirmLowercase;
    //  if (userChoices.lowercase == true) {
      //  selectedCharacters += lowercase
 // }//console.log("The function is running")

//return selectionCriteria();
};



//return selectionCriteria()
//};
//for (var i = 0; i < passwordLength; i++) {
//var chosenCharacters =
 //passwordSelections[Math.floor(Math.random() * passwordLength)];
 //};
  //console.log(passwordSelections)
//return chosenCharacters


//Generated password needs to be commented back in after changes are made
var generatePassword = function() {
  selectionCriteria();
  //console.log(userChoices)
 var allPossibilities=[]
 if (userChoices.lowercase == true) {
   allPossibilities= allPossibilities.concat(lowercase)
   console.log ("what is true")
 }
 if (userChoices.uppercase == true) {
   allPossibilities= allPossibilities.concat(uppercase)
 }
  if (userChoices.numbers == true) {
    allPossibilities= allPossibilities.concat(numbers)
  }
  if (userChoices.specialCharacters == true) {
    allPossibilities= allPossibilities.concat(specialCharacters)
  }

var newPassword = ""
 for (var i = 0; i < userChoices.length; i++) {
   //console.log(allPossibilities)
   //console.log(allPossibilities[Math.floor(Math.random() * allPossibilities.length)])
 newPassword = newPassword + allPossibilities[Math.floor(Math.random() * allPossibilities.length)];
   //console.log(userChoices) 
}

 return newPassword
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
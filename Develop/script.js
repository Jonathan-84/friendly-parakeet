// Assignment code here
var lowercase=  [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
var upperface= [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
var numbers= [0,1,2,3,4,5,6,7,8,9]
var specialCharacters=  [",#,$,%,&,',(,),*,+,,,-,.,/,:,;,<,=,>,?,@,[,],^,_,`,{,|,},~,"]

var passwordSelections= []

var generatePassword = function() {
var passwordLength = window.prompt("Please select the length of your password. Minimum of characters and Maximum of 128 characters.");
if (passwordLength > 8 && passwordLength < 128) {
  window.alert( "Your " + passwordLength + " character password will be created.");
  window.alert("Password length doesn't meet company security standards. Please select a number between 8 and 128.");
}
else {
generatePassword();
}

var confirmLowercase = window.confirm(" Do you want to include lower case letters?");
if (confirmLowercase) {
  passwordSelections.push (lowercase)
window.alert ("Lower case letters will be included in your password");
};

var confirmUppercase = window.confirm( " Do you want to include upper case letters?");
if (confirmUppercase) {
  window.alert("Upper case letters will be included in your password");
 passwordSelections.push (uppercase)
};

var confirmNumbers = window.confirm (" Do you want to include numbers in your password?");
if (confirmNumbers) {
  passwordSelections.push (numbers)
};

var confirmSpecialCharacters= window.confirm(" Do you want to include special characters in your password?");
if (confirmSpecialCharacters) {
  passwordSelections.push(specialCharacters)
};
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

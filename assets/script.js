// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(getUserSelection());
  if (!password) {
    return;
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// To clear the text area

/* function clearTextarea() {
  document.getElementById("#password").value = "";
} */

// Getting user's input

// This function gets user input from check boxes and range input types

function getUserSelection() {
  var pwdLength = document.getElementById("pwdRange").value;
  var isSplChars = document.getElementById("chkboxSplChars").checked;
  var isUpperCase = document.getElementById("chkboxUpperCase").checked;
  var isLowerCase = document.getElementById("chkboxLowerCase").checked;
  var isNumeric = document.getElementById("chkboxNumbers").checked;

  // validating user input
  if (!isSplChars && !isNumeric && !isLowerCase && !isUpperCase) {
    document.getElementById("password").innerHTML =
      "Please select atleast one type of character to generate a unique password.";
    return;
  } else {
    var userSelection = {
      passwordLength: Number(pwdLength),
      hasSpecialChars: isSplChars,
      hasLowerCaseChars: isLowerCase,
      hasUpperCaseChars: isUpperCase,
      hasNumber: isNumeric,
    };
    return userSelection;
  }
  }

// Functions to generate random characters

function getRandomElement(charArray) {
  return charArray[Math.floor(Math.random() * charArray.length)];
}

function getRandomSpecialChar() {
  return getRandomElement(specialCharacters);
}

function getRandomNumber() {
  return getRandomElement(numericCharacters);
}

function getRandomLowerCaseChar() {
  return getRandomElement(lowerCasedCharacters);
}

function getRandomUpperCaseChar() {
  return getRandomElement(upperCasedCharacters);
}

function getCharGenerators(userSelection) {
  var charGenerators = [];

  if (userSelection.hasSpecialChars) {
    charGenerators.push(getRandomSpecialChar);
  }
  if (userSelection.hasLowerCaseChars) {
    charGenerators.push(getRandomLowerCaseChar);
  }
  if (userSelection.hasNumber) {
    charGenerators.push(getRandomNumber);
  }
  if (userSelection.hasUpperCaseChars) {
    charGenerators.push(getRandomUpperCaseChar);
  }

  return charGenerators;
}

function generatePassword(userSelection) {
  if (!userSelection) {
    return;
  } else {
    var charGenerators = getCharGenerators(userSelection);
    var passwordGenerated = "";

    for (var i = 0; i < userSelection.passwordLength; i++) {
      var randomCharGenerator = getRandomElement(charGenerators);
      passwordGenerated += randomCharGenerator();
    }

    return passwordGenerated;
  }
}

/* console.log(generatePassword(getUserSelection())); */

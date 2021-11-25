// convert a string to a number
let num = '4';
num = parseInt(num);
console.log(num);

// convert a number to string
let str = 15;
str = str.toString();
console.log(str);

// Make a string uppercase
str = "hello";
strToUpper = str.toUpperCase();
let firstLetter;
firstLetter = str.charAt(0);
let propperStr;
propperStr = firstLetter.toUpperCase() + str.slice(1);
console.log(strToUpper);
console.log(propperStr);

// get second character of a string
str = 'hello';
let secondCharacter;
secondCharacter = str.charAt(1);
console.log("The Second character in " + str + " is " + secondCharacter);

// Concat two strings
let firstName;
let lastName;
let fullName;
firstName = prompt("what is your first name?");
lastName = prompt("what is your last name?");
fullName = firstName + " " + lastName;
console.log("your full name is " + fullName);

// Square and Square root of number
num = 16
let numSqr;
let numSqrt;
numSqr = num * num;
numSqrt = Math.sqrt(num);
console.log(num + "squared = " + numSqr);
console.log("the square root of " + num + " is " + numSqrt);
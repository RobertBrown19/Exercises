// What number is bigger
// prompt for 2 numbers
let numOne = parseInt(prompt("numOne"));
let numTwo = parseInt(prompt("numTwo"));

// check for non number entry
while (isNaN(numOne) || isNaN(numTwo)){
    console.log("please enter only numbers");
    numOne = parseInt(prompt("numOne"));
    numTwo = parseInt(prompt("numTwo"));
}
// compare the two numbers
if (numOne > numTwo) {
    console.log(`numOne ${numOne} is bigger than numTwo ${numTwo}`)
} else if (numOne === numTwo) {
    console.log(`numOne ${numOne} is equal to numTwo ${numTwo}`)
} else {
    console.log(`numOne ${numOne} is less than numTwo ${numTwo}`)
}

//Driving Age
let driverName = prompt("What is your name?");
let age = parseInt(prompt("What is your age? eg. 18"));

while (isNaN(age)){
    console.log("please enter only numbers");
    age = parseInt(prompt("What is your age?"));
}
let yearsUntilDriver = 16 - age
if (age < 16) {
    console.log(`Sorry ${driverName}, you still have ${yearsUntilDriver} years until you can drive.`);
} else {
    console.log("Drive into the sunset!")
}

//Say Hi

let language = prompt(`Please select a language from the following list \n
English
French
Norwegian
Turkish
Japanese`);

language = language.toLowerCase();

if (language === "english") {
    console.log("Hi")
} else if (language === "french") {
    console.log("Bonjour")
} else if (language === "norwegian") {
    console.log("Hallo")
} else if (language === "turkish") {
    console.log("Merhaba")
} else if (language === "japanese") {
    console.log("Konnichiwa")
} else {
    console.log("Language not in the list")
}

// Southern or Northern Hemisphere

let latitude = parseFloat(prompt("What is your current Latitude?"));

while (isNaN(latitude)){
    latitude = parseFloat(prompt(`Please enter only numbers. \n\nWhat is your current Latitude?`));
}

if (latitude > 0) {
    console.log("you are in the Northern Hemisphere")
} else if (latitude < 0) {
    console.log("you are in the Southern Hemisphere")
} else {
    console.log("you are on the equator")
}

// 19th, 20th or 21st century

let year = prompt("enter a year");

if (year >= 1801 && year <= 1900) {
    console.log("19th Century")
} else if (year >= 1901 && year <= 2000) {
    console.log("20th Century")
} else if (year >= 2001 && year <= 2100) {
    console.log("21st Century")
} else {
    console.log(`The year entered: ${year} is not in the 19th, 20th or 21st Century.`)
}

// Greet
let currentHour = parseInt(prompt("Current Hour in 24 hour time"));

while (isNaN(currentHour)){
    console.log("please enter only numbers");
    currentHour = parseInt(prompt("Current Hour in 24 hour time"));
}

if (currentHour < 10){
    console.log("Good Morning")
} else if (currentHour < 19){
    console.log("Good Day")
} else {
    console.log("Good Evening")
}
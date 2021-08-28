/*

// ALERTS 
alert("Hola Mundo! - Hello World!");
alert("I am learning Javascript.");

// PROMPTS
prompt("What is your name?");
prompt("How old are you?");

// Variables
let myName = ("Rodney Allen Rippy");
console.log(myName);

let yourNme = prompt("What is your name?");
console.log(yourNme);

// Coding Challenge 1 //
// Write code that switches the values of both a and b //

let a = "3";
let b = "8";

function test() {
    let a = "3";
    let b = "8";

let c = a;  
a = b;
b = c;

console.log("a is " + a);
console.log("b is " + b);
}

test();

// Coding Challenge. Create an alert from 2 variables using strings
let greeting = "Good morning";
let name = "Glenny";

alert(greeting + " " + name + ".");

// String Length
let concert = "Lollapalooza";
console.log(concert.length);

let tweet = prompt("Let us know whats on your mind.");
let tweetMsg = tweet.length;
alert("You have written " + tweetMsg + " characters. You now have " + (280 - tweetMsg) + " characters left."); 

// String Slicing
let str = "Hello World!";
console.log(str.slice(0, 5));

let prince = "Bonnie Prince Charlie";
console.log(prince.slice(0, 13));

let tweet = prompt("Let us know whats on your mind.");
let tweetUnder140 = tweet.slice(0, 140);
alert(tweetUnder140);
console.log(tweetUnder140.length); 

// ** To Uppercase
let punishment = "big trouble";
console.log("Young man you're in " + punishment.toUpperCase() + "!");

// ** To Lowercase
let villian = "THANOS OF TITAN";
console.log(villian.toLowerCase() + " is one sick dude!");

// ** Create a var that stores the name that the user enters via prompt
// ** Capitalize the first letter of their name
let firstName = prompt("What is your first name?");
let lastName = prompt("what your last name?");
alert("Hello " + firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase() + " " + lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase() + "!");

console.log("Hello " + firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase() + " " + lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase() + "!");

// ** Dog Age Calculater

let dogAge = prompt("How old is your dog?");
let humanAge = (dogAge -2 ) * 4 + 21;
alert("Your dog is " + humanAge + " years old in human years.");

// ** Age Calculater
let birthYear = prompt("Enter your year of birth.");
let currentYear = 2021 - birthYear;
alert("You are " + currentYear + ".");

*/


//FUNCTIONS

// Calling A Function
function food() {
    console.log("I want some food.");
}

food();

function football() {
    const team = "Rams";
    console.log("The " + team + " are my favorite footbal team.");
}

football();

function myAunt() {
    const favAunt = "May";
    console.log(`${favAunt} is my favorite aunt.`);
}

myAunt();




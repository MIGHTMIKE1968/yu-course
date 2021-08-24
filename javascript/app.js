/* ALERTS 
alert("Hola Mundo! - Hello World!");
alert("I am learning Javascript.");
*/

/* PROMPTS
prompt("What is your name?");
prompt("How old are you?");
*/

// Variables
var myName = ("Rodney Allen Rippy");
console.log(myName);

// var yourNme = prompt("What is your name?");
//console.log(yourNme);

// Coding Challenge 1 //
// Write code that switches the values of both a and b //

var a = "3";
var b = "8";

function test() {
    var a = "3";
    var b = "8";

var c = a;  
a = b;
b = c;

console.log("a is " + a);
console.log("b is " + b);
}

test();

// Coding Challenge. Create an alert from 2 variables using strings
var greeting = "Good morning";
var name = "Glenny";

//alert(greeting + " " + name + ".");

// String Length
var concert = "Lollapalooza";
console.log(concert.length);

//let tweet = prompt("Let us know whats on your mind.");
//let tweetMsg = tweet.length;
//alert("You have written " + tweetMsg + " characters. You now have " + (280 - tweetMsg) + " characters left."); 

// String Slicing
let str = "Hello World!";
console.log(str.slice(0, 5));

let prince = "Bonnie Prince Charlie";
console.log(prince.slice(0, 13));

//let tweet = prompt("Let us know whats on your mind.");
//let tweetUnder140 = tweet.slice(0, 140);
//alert(tweetUnder140);
//console.log(tweetUnder140.length); 

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





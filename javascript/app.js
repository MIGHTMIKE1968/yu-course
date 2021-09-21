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

// Parameters and Arguments

function exercise(pushups) {
    const workout = pushups * 10;
    console.log(`I want you to do ${workout} pushups this workout.`);
}

exercise(20);

function weightLoss(pounds) {
    const weight = 275 - pounds;
    console.log(`I need to lose just 25lbs to get back to ${weight}.`);
}

weightLoss(25);

function days(month) {
    console.log(`There are ${month} days in the month of December.`);
}

days(31);

function sibling(sister) {
    console.log(`I have a baby sister named ${sister}.`);
}

sibling("Marie");

function superHero(hero, hero2) {
    console.log(`${hero} and the ${hero2} are my favorite super heroes.`);
}

superHero("Spider-Man", "Hulk");

function travel(city1, city2, city3) {
    console.log(`When I visit Europe I'm going to ${city2}, ${city3}, and ${city1}.`);
}

travel("Paris", "London", "Madrid");

// Coding Exercise - create a function that tells us how many days, weeks and months we have left until age 90.

function timeLeft(age) {
    let currentAge = prompt("Enter your current age."); 
    let day = (90 - currentAge) * 365;
    let week = (90 - currentAge) * 52;
    let month = (90 - currentAge) * 12;
    console.log(`You have ${day} days, ${week} weeks and ${month} months left before you turn 90.`);
}

timeLeft();


function lifeInWeeks(age) {    
        
        let yearsRemaining = 90 - age;
        let days = yearsRemaining * 365;
        let weeks = yearsRemaining * 52;
        let months = yearsRemaining * 12;
        
        console.log("You have " + days + " days," + weeks + " weeks, and " + months + " months left before turning 90.");
}

lifeInWeeks(53);

// Return
function getMilk(money) {

    let numOfBottles = Math.floor(money / 1.5);
    console.log("Buy " + numOfBottles + " bottles of milk");

    return money % 1.5;

}

let change = getMilk(4);
console.log(change);


function remaining(days, daysLeft) {
    return days - daysLeft;
}

console.log(`You have exactly ${remaining(56, 14)} days left to complete your course.`);


function multiply(a, b) {
    return a * b;
    console.log(`Today Curtis turned ${multiply} years old.`);
}

console.log(`Today Curtis turned ${multiply(6, 6)} years old.`);


function subtract(x, y) {
    return y - x;
}

let wifeName = "Jane";

console.log(`Trevor is ${subtract(4, 8)} years older than his wife ${wifeName}.`);


function trip(town) {
    return town;
}

let country = "The Dominican Republic";


console.log(`${trip("Puerto Plata")} is a great resort town in the ${country}.`);

function share(z) {
    return z;
}

person = ["Jay", "William", "Suzy", "Teresa"];

console.log(`${person[3]}, ${person[0]}, ${person[2]}, and ${person[1]} are to each receive $${share(400)}.`);


function battingAverage(i, e) {
    return i / e;
}

ballPlayer = "Hector Cruz";
console.log(`${ballPlayer} has a lifetime batting average of ${battingAverage(400, 1200)}`);


// Random Numbers
let x = Math.random();

x = x * 6;

x = Math.floor(x) + 1;

console.log(x);


// Love Score Game
let nameOne = prompt(`Enter Your name.`);
let nameTwo = prompt(`Enter your potential match's name.`);

let loveScore = Math.random();

loveScore = loveScore * 100;

loveScore = Math.floor(loveScore) + 1;

alert(`${nameOne} and ${nameTwo} you have a love match of ${loveScore}%.`);

if (loveScore >= 90) {
    alert(`You make a great couple!`);
} else if (loveScore < 90 && loveScore >= 75) {
    alert(`You make a good love match.`);
} else {
    alert(`Sorry but you are not a great love match.`);
}

// If Else Practice
let yourAge = prompt(`Enter your age please.`);

if (yourAge >= 35) {
    console.log(`Welcome to Club Elite!`);
} else {
    console.log(`Sorry but this night club is for the grown and sexy only!`);
}

// Leap Year Exercise
function isLeap(year) {

    if (year % 4 === 0) {
        if (year % 100 == 0) {
            if (year / 400 === 0) {
                return "Leap year."
            } else {
                return "Not leap year"
            }
        } else {
            return "Leap year."
        } 
    } else {
        return "Not leap year."
    }
}

console.log(`${isLeap(2004)}`);

*/

// Arrays

/*
let guestName = prompt(`Enter your name`);

let guestList = ["Fred", "Marie", "Walter", "Pam"];

if (guestList.includes(guestName)) {
    alert(`You are on the guest list!`);
} else {
    alert(`Sorry. You are not on the guest list.`);
}
*/

let output = [];
let count = 1;

function fizzBuzz() {

if (count % 3 == 0 && count % 5 === 0) {
    output.push("Fizzbuzz");
}
else if (count % 3 === 0) {
    output.push("Fizz");
} 
else if (count % 5 === 0) {
    output.push("Buzz");
}
else  {
    output.push(count);    
}

count++;

    console.log(output);
}

fizzBuzz();

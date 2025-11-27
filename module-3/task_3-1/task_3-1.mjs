"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

let wakeUpTime = 7;

// Part 1 logic
if (wakeUpTime === 7) {
    printOut("I can take the bus to school.");
}

printOut(newLine);

let TextLine1 = "";
let TextLine2 = "";
for (let i = 1, j = 10; i <= 10; i++, j--) { 
    TextLine1 += " " + i;
    TextLine2 += " " + j;
}
printOut(TextLine1);
printOut(TextLine2); 

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

// Part 2 logic
if (wakeUpTime === 7) {
    printOut("I can take the bus to school.");
} else {
    printOut("I have to take the car to school.");
}

printOut(newLine);

const part1GuessNumber = 45; 
let part1Random = Math.floor(Math.random() * 60) + 1;

while (part1Random !== part1GuessNumber) {
    part1Random = Math.floor(Math.random() * 60) + 1;
}

printOut("Yes! You guessed correct: " + part1Random);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

// Part 3 logic
if (wakeUpTime === 7) {
    printOut("I can take the bus to school.");
} else if (wakeUpTime === 8) {
    printOut("I can take the train to school.");
} else {
    printOut("I have to take the car to school.");
}

printOut(newLine);

const part3Time = Date.now();
const part3GuessNumber = 654321;
let part3Random; 
let part3Count = 0;

do {
    part3Random = Math.floor(Math.random() * 1000000) + 1;
    part3Count++;
} while (part3Random !== part3GuessNumber);

printOut("number of guesses: " + part3Count);
const part3DeltaTime = Date.now() - part3Time; 
printOut("number of mSec: " + part3DeltaTime);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Example integer
let number = -3;

// Part 4 logic
if (number > 0) {
    printOut("Positive");
} else {
    printOut("Negative");
}

printOut(newLine);

let textPart4Primes = ""; 
for (let i = 0; i <= 200; i++) {
    let j = i - 1;
    let isPrime = true;
    while (j > 1 && isPrime) {
        let rest = i % j; 
        isPrime = rest != 0;
        j--;
    }

    if (isPrime) { 
        textPart4Primes += " " + i;
    }
}

printOut(textPart4Primes);
printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

// Part 5 logic
if (number > 0) {
    printOut("Positive");
} else if (number === 0) {
    printOut("Zero");
} else {
    printOut("Negative");
}

printOut(newLine);


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

// Part 6 logic
let imageSize = Math.floor(Math.random() * 8) + 1;
printOut("Image size: " + imageSize + " MP");

if (imageSize >= 4) {
    printOut("Thank you");
} else {
    printOut("The image is too small");
}

printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

// Part 7 logic
if (imageSize < 4) {
    printOut("The image is too small");
} else if (imageSize >= 6) {
    printOut("Image is too large");
} else {
    printOut("Thank you");
}

printOut(newLine);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const monthList = [
    "January", "February", "Mars", "April", "Mai",
    "Jun", "Juli", "August", "September", "October", "November", "December"
];

const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut("Current month: " + monthName);

// Part 8 logic
if (monthName.toLowerCase().includes("r")) {
    printOut("You must take vitamin D");
} else {
    printOut("You do not need to take vitamin D");
}

printOut(newLine);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

// Part 9 logic
let days;

if (monthName === "February") {
    days = 28;
} else if (
    monthName === "April" || 
    monthName === "Jun" || 
    monthName === "September" || 
    monthName === "November"
) {
    days = 30;
} else {
    days = 31;
}

printOut("Days in this month: " + days);

printOut(newLine);


/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

// Part 10 logic
if (monthName === "March" || monthName === "Mai") {
    printOut("The gallery is closed this month.");
} else if (monthName === "April") {
    printOut("The gallery is open in temporary premises.");
} else {
    printOut("The gallery is open normally.");
}

printOut(newLine);

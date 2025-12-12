"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");


let TextLine1 = "";
let TextLine2 = "";
for (let i = 1,j = 10; i <= 10; i++, j--){ 
    TextLine1 += " " + i;
    TextLine2 += " " + j;
}
printOut(TextLine1);
printOut(TextLine2); 
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const part1GuessNumber = 45; 
let part1Random = Math.floor(Math.random()* 60) + 1;
while( part1Random  !== part1GuessNumber){
    part1Random = Math.floor( Math.random()* 60) + 1;
    
}
printOut("Yes! You guessed correct: " + part1Random);
printOut(newLine);
printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

const part3Time = Date.now();
const part3GuessNumber = 654321;
let part3Random; 
let part3Count = 0;
do{
part3Random = Math.floor (Math.random() * 1000000) + 1;
part3Count++;
} while ( part3Random !== part3GuessNumber);

printOut("number of guesses: " + part3Count);
const part3DeltaTime = Date.now() - part3Time; 
printOut("numer of mSec: " + part3DeltaTime);
printOut(newLine);
printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let textPart4Primes = ""; 
for(let i = 0; i <= 200; i++){
    let j = i - 1;
    let isPrime = true;
    while( j > 1 && isPrime){
        let rest = i % j; 
        isPrime = rest != 0;
        j--;
    }

    if (isPrime){ 
    textPart4Primes += " " + i;}
}

printOut(textPart4Primes);
printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
// ...existing code...


const totalRows = 7;
const totalColumns = 9;

for (let currentRow = 1; currentRow <= totalRows; currentRow++) {
    let rowText = "";

    for (let currentColumn = 1; currentColumn <= totalColumns; currentColumn++) {
        let cellLabel = "K" + currentColumn + "R" + currentRow;
        rowText += cellLabel + " ";
    }

    printOut(rowText.trim());
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

// Function to calculate letter grade from score
function calculateGrade(score) {
    const percentage = (score / 236) * 100;

    if (percentage >= 89) return "A";
    if (percentage >= 77) return "B";
    if (percentage >= 65) return "C";
    if (percentage >= 53) return "D";
    if (percentage >= 41) return "E";
    return "F";
}

// Counters for each grade
let gradeCounts = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };

// Simulate 5 students
for (let student = 1; student <= 5; student++) {
    const score = Math.floor(Math.random() * 236) + 1;
    const grade = calculateGrade(score);

    gradeCounts[grade]++; // Increment counter for the grade
    printOut(`Student ${student}: Score = ${score}, Grade = ${grade}`);
}

// Print grades in descending order (A → F)
printOut("Grades in descending order:");
for (const grade of ["A", "B", "C", "D", "E", "F"]) {
    for (let i = 0; i < gradeCounts[grade]; i++) {
        printOut(grade);
    }
}

printOut(newLine);
printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Roll six dice (returns array of 1-6)
function roll() {
    return [
        (Math.random() * 6 | 0) + 1,
        (Math.random() * 6 | 0) + 1,
        (Math.random() * 6 | 0) + 1,
        (Math.random() * 6 | 0) + 1,
        (Math.random() * 6 | 0) + 1,
        (Math.random() * 6 | 0) + 1
    ];
}

// Count occurrences of each number (1-6)
function count(dice) {
    const c = [0, 0, 0, 0, 0, 0, 0]; // Index 1-6 used
    for (let d of dice) c[d]++;
    return c;
}

// Full Straight (1,2,3,4,5,6 in any order)
function fullStraight() {
    let throws = 0;
    const maxThrows = 1000000; // Safety cap
    while (throws < maxThrows) {
        throws++;
        const dice = roll();
        if (dice.sort().join("") === "123456") return throws;
    }
    return -1; // If max reached (unlikely)
}

// Three Pairs (exactly three pairs of different numbers)
function threePairs() {
    let throws = 0;
    const maxThrows = 1000000;
    while (throws < maxThrows) {
        throws++;
        const c = count(roll());
        let pairs = 0;
        for (let i = 1; i <= 6; i++) {
            if (c[i] === 2) pairs++;
        }
        if (pairs === 3) return throws;
    }
    return -1;
}

// Tower (one pair + one four-of-a-kind)
function tower() {
    let throws = 0;
    const maxThrows = 1000000;
    while (throws < maxThrows) {
        throws++;
        const c = count(roll());
        let has2 = false, has4 = false;
        for (let i = 1; i <= 6; i++) {
            if (c[i] === 2) has2 = true;
            if (c[i] === 4) has4 = true;
        }
        if (has2 && has4) return throws;
    }
    return -1;
}

// Yahtzee (six-of-a-kind)
function yahtzee() {
    let throws = 0;
    const maxThrows = 1000000;
    while (throws < maxThrows) {
        throws++;
        const c = count(roll());
        for (let i = 1; i <= 6; i++) {
            if (c[i] === 6) return throws;
        }
    }
    return -1;
}

// Print results
printOut("Full Straight: " + fullStraight() + " throws");
printOut("Three Pairs: " + threePairs() + " throws");
printOut("Tower (2+4): " + tower() + " throws");
printOut("Yahtzee: " + yahtzee() + " throws");

printOut(newLine);


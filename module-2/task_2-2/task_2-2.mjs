"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut();

let orginalExpression = "2 + 3 * 2 - 4 * 6";
let modifiedExpression = 2 + 3 * (2 - 4) * 6;
let calculate = 2 + 3 * (2 - 4) * 6;

printOut("Original Expression: " + orginalExpression 
    + newLine + "Modified Expression: " + 
    modifiedExpression + newLine + "Answer: " + calculate);



printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!Convert 25 metres and 34 centimetres to inches. An inch is 25.4 millimetres (maximum 2 decimal places in
the answer */

let metres = 25;
let centimetres = 34;
let inches = (metres * 1000 + centimetres * 10) / 25.4;

printOut("25 metres and 34 centimetres is " + inches.toFixed(2) + " inches.");
printOut(newLine);




printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes. (Not allowed to use date objects). The
task must be solved with primitives*/
let days = 3;
let hours = 12;
let minutes = 14;
let seconds = 45;

let totalMinutes = days * 24 * 60 + hours * 60 + minutes + seconds / 60;

printOut(`3 days, 12 hours, 14 minutes, and 45 seconds is ${totalMinutes.toFixed(2)} minutes.`);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here! Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). The
task must be solved with primitives*/
let totalMins = 6322.52;
let d = Math.floor(totalMins / (24 * 60));
let h = Math.floor((totalMins % (24 * 60)) / 60);
let m = Math.floor(totalMins % 60);
let s = Math.round((totalMins - Math.floor(totalMins)) * 60);

printOut(`6322.52 minutes is ${d} days, ${h} hours, ${m} minutes, and ${s} seconds.`);





printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here! Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars".*/
function convertCurrency(amount, exchangeRate) {
    return Math.round(amount * exchangeRate);
}
let usd = 54;
let nokToUsdRate = 8.6 / 76;
let usdToNokRate = 76 / 8.6;

let nok = convertCurrency(usd, usdToNokRate);
console.log(`${usd} USD is approximately ${nok} NOK.`);

printOut(`${usd} USD is approximately ${nok} NOK.`);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
● Print the number of characters in the text.
● Print the character at position number 19.
● Print the characters starting at position number 35 and 8 characters forward.
● Print the index at which "earth" starts in the text */

let text = "There is much between heaven and earth that we do not understand.";
console.log(Text.length); //Number of characters
printOut(text.length); Output: //Total number of characters

console.log(text.charAt(19)); // or text[19]
printOut(text.charAt(19)); //Character at position 19

console.log(text.substring(35, 35 + 8)); // from position 35 to 42 (not including 43)
printOut(text.substring(35, 35 + 8)); //Characters from position 35, 8 characters forward

console.log(text.indexOf("earth")); //Index where "earth" starts
printOut(text.indexOf("earth")); //Index where "earth" starts

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Comparison, print the values for the following expressions (evaluate whether the statements are true):
● Is 5 greater than 3?
● Is 7 greater than or equal to 7?
● Is "a" greater than "b"?
● Is "1" less than "a"?
● Is "2500" less than "abcd"?
● "arne" is not equal to "thomas".
● (2 equals 5) is this statement true?
● ("abcd" is greater than "bcd") is this statement false*/
// Is 5 greater than 3?

console.log("Is 5 greater than 3? ->", 5 > 3); // true
printOut("Is 5 greater than 3? ->" + (5 > 3)); // true

// Is 7 greater than or equal to 7?
console.log("Is 7 greater than or equal to 7? ->", 7 >= 7); // true
printOut("Is 7 greater than or equal to 7? ->" + (7 >= 7)); // true

// Is "a" greater than "b"?
console.log('Is "a" greater than "b"? ->', "a" > "b"); // false 
printOut('Is "a" greater than "b"? ->' + ("a" > "b")); // false 

// Is "1" less than "a"?
console.log('Is "1" less than "a"? ->', "1" < "a"); // true 
printOut('Is "1" less than "a"? ->' + ("1" < "a")); // true 

// Is "2500" less than "abcd"?
console.log('Is "2500" less than "abcd"? ->', "2500" < "abcd"); // true 
printOut('Is "2500" less than "abcd"? ->' + ("2500" < "abcd")); // true

// "arne" is not equal to "thomas".
console.log('"arne" is not equal to "thomas" ->', "arne" !== "thomas"); // true
printOut('"arne" is not equal to "thomas" ->' + ("arne" !== "thomas")); // true

// (2 equals 5) is this statement true?
console.log('(2 equals 5) is this statement true? ->', 2 === 5); // false
printOut('(2 equals 5) is this statement true? ->' + (2 === 5)); // false

// ("abcd" is greater than "bcd") is this statement false
console.log('("abcd" is greater than "bcd") is this statement false ->', !("abcd" > "bcd")); // true
printOut('("abcd" is greater than "bcd") is this statement false ->' + (!("abcd" > "bcd"))); // true

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/*Convert and print the following expressions:
● from text "254" to a number
● from text "57.23" to a number
● from text "25 kroner" to a number*/

// From text "254" to a number
let num1 = Number("254");
console.log(num1); // 254
printOut(num1); // 254

// From text "57.23" to a number
let num2 = Number("57.23");
console.log(num2); // 57.23
printOut(num2); // 57.23

// From text "25 kroner" to a number
let num3 = parseInt("25 kroner");
console.log(num3); // 25
printOut(num3); // 25

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360)*/
let r = Math.floor(Math.random() * 360) + 1;
console.log(r);
printOut(r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Use modulus (%) to calculate how many weeks and days are in 131 days*/

let totalDays = 131;
let weeks = Math.floor(totalDays / 7);
let daysLeft = totalDays % 7;
printOut(weeks + " weeks and " + daysLeft + " days");
printOut(newLine);

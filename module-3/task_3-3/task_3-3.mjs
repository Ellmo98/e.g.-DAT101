"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
function printTodaysDateNorwegian() {
    const today = new Date();

    const formattedDate = today.toLocaleString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    console.log(formattedDate);
    return formattedDate;
}


printTodaysDateNorwegian();

printOut("This is today's date in Norwegian format: " + printTodaysDateNorwegian());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getTodaysDate() {
    const today = new Date();
    console.log(today.toLocaleDateString("no-NB"));
    return today;
}

function daysUntil2XKO(currentDate) {
    const releaseDate = new Date("2026-05-14");
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const difference = releaseDate - currentDate;

    return Math.ceil(difference / millisecondsPerDay);
}

const today = getTodaysDate();
const daysLeft = daysUntil2XKO(today);
console.log(`🔥 ${daysLeft} days left until 2XKO launches! 🔥`);
printOut(`🔥 ${daysLeft} days left until 2XKO launches! 🔥`);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function circleCalculations(radius) {
    const diameter = radius * 2;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;

    printOut("Diameter: " + diameter);
    printOut("Circumference: " + circumference);
    printOut("Area: " + area);
}

// Call the function with a specific radius
circleCalculations(5); // Example radius
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rectangleCalculations(rectangle) {
    const circumference = 2 * (rectangle.width + rectangle.height);
    const area = rectangle.width * rectangle.height;

    printOut("Circumference: " + circumference);
    printOut("Area: " + area);
}

// Call the function with a specific rectangle
rectangleCalculations({ width: 10, height: 5 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertTemperature(value, type) {
    type = type.toLowerCase();

    let celsius;
    let fahrenheit;
    let kelvin;

    if (type === "k") {
        // From image formulas
        celsius = value - 273.15;
        fahrenheit = (value - 273.15) * 9 / 5 + 32;
        kelvin = value;

    } else if (type === "f") {
        // From image formula
        celsius = (value - 32) * 5 / 9;
        kelvin = celsius + 273.15;
        fahrenheit = value;

    } else if (type === "c") {
        celsius = value;
        kelvin = value + 273.15;
        fahrenheit = value * 9 / 5 + 32;

    } else {
        console.log("Unknown temperature type");
        return;
    }

    printOut(
        "Celsius: " + Math.round(celsius) + ", " +
        "Fahrenheit: " + Math.round(fahrenheit) + ", " +
        "Kelvin: " + Math.round(kelvin)
    );
}

convertTemperature(0, "c");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function priceWithoutVAT(grossPrice, vatGroup) {
    vatGroup = vatGroup.toLowerCase();
    let vat;

    if (vatGroup === "normal") vat = 25;
    else if (vatGroup === "food") vat = 15;
    else if (
        vatGroup === "hotel" ||
        vatGroup === "transport" ||
        vatGroup === "cinema"
    ) vat = 10;
    else {
        console.log("Unknown VAT group!");
        return NaN;
    }

    return (100 * grossPrice) / (100 + vat);
}

printOut(priceWithoutVAT(125, "normal"));
printOut(priceWithoutVAT(115, "food"));
printOut(priceWithoutVAT(110, "cinema"));
printOut(priceWithoutVAT(200, "goblins"));
printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateMotion(distanceInMeters, timeInSeconds, speedInMetersPerSecond) {
    const isDistanceMissing = distanceInMeters === undefined;
    const isTimeMissing = timeInSeconds === undefined;
    const isSpeedMissing = speedInMetersPerSecond === undefined;

    const missingValuesCount =
        isDistanceMissing + isTimeMissing + isSpeedMissing;

    // More than one missing value is not allowed
    if (missingValuesCount !== 1) {
        return NaN;
    }
    
    // Calculate speed (m/s)
    if (isSpeedMissing) {
        if (timeInSeconds === 0) {
            console.log("Time cannot be zero for speed calculation.");
            return NaN;
        }
        return distanceInMeters / timeInSeconds;
    }
    
    // Calculate time (s)
    if (isTimeMissing) {
        if (speedInMetersPerSecond === 0) {
            console.log("Speed cannot be zero for time calculation.");
            return NaN;
        }
        return distanceInMeters / speedInMetersPerSecond;
    }
    
    // Calculate distance (m)
    if (isDistanceMissing) {
        return speedInMetersPerSecond * timeInSeconds;
    }
}
printOut(calculateMotion(100, 9.58, undefined)); // Speed

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function expandText(text, maxLength, character, addBefore) {
    let result = text;

    while (result.length < maxLength) {
        result = addBefore ? character + result : result + character;
    }

    console.log(result);
    return result;
}

const expandedText = expandText("Hello", 10, "*", true);
printOut(expandedText);
printOut(newLine);
const expandedText2 = expandText("World", 15, "-", false);
printOut(expandedText2);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function mathsTest() {
    let currentNumber = 1;

    for (let line = 1; line <= 200; line++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let i = 0; i < line; i++) {
            leftSum += currentNumber++;
        }

        for (let i = 0; i < line; i++) {
            rightSum += currentNumber++;
        }

        if (leftSum !== rightSum) {
            console.log(`Mismatch on line ${line}`);
            return;
        }
    }

    console.log("Maths fun!");
}

mathsTest();
printOut("Maths fun!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(number) {
    if (number <= 1) {
        return 1;
    }
    return number * factorial(number - 1);
}

printOut(factorial(5));
printOut(factorial(6));
printOut(newLine);

"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Array
const numbers = [
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 10,
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
];
printOut("length=" + numbers.length + " Value:" + numbers[numbers.length - 1]);

for (let i = 0; i < numbers.length; i++) {  // Fixed: was i = 1 + 1
  console.log(numbers[i]);
}

printOut(newLine);  // Fixed: 'i' was out of scope, removed it

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

const gulost = numbers.join(" , ");

printOut(gulost);

printOut(newLine);  // Added missing printOut

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text = "Hei på deg, hvordan har du det?";
const words = text.split(" ");
let part3Text = "";

for (let i = 0; i < words.length; i++) {
  const word = words[i];
  part3Text += " Index " + i.toString() + " _ " + word + newLine;
}

printOut(part3Text);



printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
// ... rest of code (Parts 4-10 look correct)
const girlNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeElementFromArray (array, elementToRemove) {
const index = array.indexOf(elementToRemove);

if(index === -1) {
  console.log(`"${elementToRemove}" exists NOT in the array.`);
    return;
  }

  array.splice(index, 1);
  console.log(`"${elementToRemove}" was removed from the array.`);

}
removeElementFromArray(girlNames, "Eva");      // finnes → fjernes
removeElementFromArray(girlNames, "Sofie");   // finnes ikke

printOut(girlNames);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const boyNames = [
  "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
  "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias",
  "Liam", "Håkon", "Theodor", "Magnus"
];

const allNames = [boyNames, girlNames]

printOut(allNames)

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

class TBook{

  #title
  #author
  #ISBN

  constructor(aTitle, aAuthor, aISBN) {
    this.#title = aTitle;
    this.#author = aAuthor;
    this.#ISBN = aISBN;
  }
  toString() {
    return { title: this.#title, author: this.#author, ISBN: this.#ISBN };
  }
}
const book1 = new TBook("1984", "George Orwell", "9780451524935");
const book2 = new TBook("Sult", "Knut Hamsun", "9788203194876");
const book3 = new TBook("Harry Potter", "J.K. Rowling", "9780747532743");
const books = [book1, book2, book3];

for (let i = 0; i < books.length; i++) {
  printOut(books[i].toString());
}

printOut("--- Part 7----------------------------------------------------------------------------------------------");
printOut("--- Part 7----------------------------------------------------------------------------------------------");

const weekDays = {
  Day1: { value: 1, name: "Mandag" },
  Day2: { value: 2, name: "Tirsdag" },
  Day3: { value: 3, name: "Onsdag" },
  Day4: { value: 4, name: "Torsdag" },
  Day5: { value: 5, name: "Frædda" },
  Day6: { value: 6, name: "Lørdag" },
  Day7: { value: 7, name: "Søndag" },

  Jobbdager: { value: 1 + 2 + 3 + 4 + 5, name: "Jobbdager" },
  Fridager: { value: 6 + 7, name: "Helg!" }
};

const weekDayKeys = Object.keys(weekDays);

for (let i = 0; i < weekDayKeys.length; i++) {
  const key = weekDayKeys[i];
  const element = weekDays[key];

  printOut("Day: " + key);
  printOut("Name: " + element.name);
  printOut("Value: " + element.value);
  printOut("---------------------");
}







printOut("--- Part 8 ----------------------------------------------------------------------------------------------");


const randomNumbers = [];

for (let i = 0; i < 35; i++) {
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  randomNumbers.push(randomNumber);
}

// Callback for stigende sortering
function sortAscending(a, b) {
  return a - b;
}

// Callback for synkende sortering
function sortDescending(a, b) {
  return b - a;
}

printOut("Original array:");
printOut(randomNumbers);

const ascendingArray = randomNumbers.slice().sort(sortAscending);
const descendingArray = randomNumbers.slice().sort(sortDescending);

printOut("Sorted ascending:");
printOut(ascendingArray);

printOut("Sorted descending:");
printOut(descendingArray);


printOut("--- Part 9----------------------------------------------------------------------------------------------");


// randomNumbers fra Part 8 brukes
// Lag et objekt som teller hvor mange ganger hvert tall forekommer
const frequency = {};

for (let i = 0; i < randomNumbers.length; i++) {
  const num = randomNumbers[i];
  if (frequency[num]) {
    frequency[num] += 1;
  } else {
    frequency[num] = 1;
  }
}

// Print tallene og frekvensen
printOut("Numbers and their frequency:");
const keys = Object.keys(frequency).map(Number).sort((a, b) => a - b);

for (let i = 0; i < keys.length; i++) {
  const num = keys[i];
  printOut("Number " + num + " occurs " + frequency[num] + " times");
}

// Lag et nytt objekt der frekvensen er nøkkel
const freqGroups = {};

for (let num in frequency) {
  const freq = frequency[num];
  if (freqGroups[freq]) {
    freqGroups[freq].push(Number(num));
  } else {
    freqGroups[freq] = [Number(num)];
  }
}

// Lag array med frekvensene for sortering (størst først)
const freqKeys = Object.keys(freqGroups).map(Number).sort((a, b) => b - a);

printOut("Frequencies and corresponding numbers:");

for (let i = 0; i < freqKeys.length; i++) {
  const freq = freqKeys[i];
  const nums = freqGroups[freq].sort((a, b) => a - b); // hvis flere tall med samme frekvens
  printOut("Frequency " + freq + ": " + nums);
}

printOut("--- Part 10----------------------------------------------------------------------------------------------");


// Start med et tomt array
const twoDArray = [];

// Lag rader og kolonner (5x9)
for (let row = 0; row < 5; row++) {
  twoDArray[row] = []; // lag ny rad
  for (let col = 0; col < 9; col++) {
    twoDArray[row][col] = "Row " + row + ", Col " + col;
  }
}

// Print hele arrayet
printOut("Printing 2D array:");

for (let row = 0; row < twoDArray.length; row++) {
  for (let col = 0; col < twoDArray[row].length; col++) {
    printOut(twoDArray[row][col]);
  }
  printOut("---------------------"); // skille mellom rader
}

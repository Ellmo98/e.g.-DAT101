"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

let TextLine1 = "";
let TextLine2 = "";
for (let i = 1,j = 10; i <= 10; i++, j--){ 
    TextLine1 += " " + i;
    TextLine2 += " " + j;
}
printOut(TextLine1);
printOut(TextLine2); 

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
printOut("Replace this with you answer!");
printOut(
    )
const part1GuessNumber = 45; 
let part1Random = Math.floor(Math.random()* 60); +1;
while( part1Random  !== part1GuessNumber){
    part1Random = Math.floor( Math.random()* 60); +1;
    
}
printOut("Yes! You guessed correct: " + part1Random);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

const part3Time = Date.now();
const part3GuessNumber = 654321;
let part3Random; 
let part3Count = 0;
do{
part3Random = Math.floor (Math.random() * 1000000); +1;
part3Count++;
} while ( part3Random !== part3GuessNumber);

printOut("number of guesses: " + part3Count);
const part3DeltaTime = Date.now() - part3Time; 
printOut("numer of mSec: " + part3DeltaTime);

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
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

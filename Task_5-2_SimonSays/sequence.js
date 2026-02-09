"use strict";  //Gjør at programmet ikke gjetter seg frem til hva du prøver på. Uten "use strict" tregner man ikke å deklarere variabler."
import { EGameStatusType, spawnColorButton, gameOver, updateRound } from "./SimonSays.mjs";


let colorButton = null;
let sequence = [];
let round = 0;
let seqIndex = 0;

export function addRandomButton(aColorButtons) {
    const index = Math.floor(Math.random() * aColorButtons.length);
    colorButton = aColorButtons[index];
    sequence.push(colorButton);
    seqIndex = 0;
    colorButton = sequence[0];
    setTimeout(setButtonDown, 500);
}

export function testOfUserInput(aColorButton) {
    if(aColorButton === colorButton) {
        console.log("OH HELL YEAH!")
        seqIndex++;
        if(seqIndex < sequence.length) { 
             //We have reached the end of the sequence
          colorButton = sequence[seqIndex];
        }else{
            round++;
            updateRound(round);
            spawnColorButton();
        }
    } else {
        
        console.log(" OH HELL NOO!")
        gameOver();
    }
}


function setButtonDown() {
    colorButton.onMouseDown();
    setTimeout(setButtonUp, 500);
}


function setButtonUp() {
    colorButton.onMouseUp();
    seqIndex++;
    if(seqIndex < sequence.length) {
    
        colorButton = sequence[seqIndex];
        setTimeout(setButtonDown, 500);
        
    }else{
    
         EGameStatusType.state = EGameStatusType.Gamer;
         seqIndex = 0;
         colorButton = sequence[0];
    }
}



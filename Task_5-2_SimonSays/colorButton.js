"use strict";
import { TSpriteButton } from "libSprite";
import { EOctave, ENoteName, TSoundWave } from "libSound";
import { testOfUserInput } from "./sequence.js";
import { EGameStatusType } from "./SimonSays.mjs";

export class TColorButton extends TSpriteButton {
  #dst;
  #gameBoardCenter;
  #sound;

  constructor(aSpcvs, aSPI, aGameBoardCenter) {
    super(aSpcvs, aSPI, aSPI.dst.x, aSPI.dst.y);
    this.#dst = aSPI.dst;
    this.#gameBoardCenter = aGameBoardCenter;
    this.#sound = null;
    

  }
 isMouseOver(aMousePos) {
  const isOver = super.isMouseOver(aMousePos);
  if(isOver === true) {
    const dx = this.#gameBoardCenter.x - aMousePos.x;
    const dy = this.#gameBoardCenter.y - aMousePos.y;
     let hyp= Math.pow(dx, 2) + Math.pow(dy, 2);
    hyp = Math.sqrt(hyp);
    let inside = hyp > this.#dst.r1 && hyp < this.#dst.r2;
    if(inside === true) {
      return true;
    }else{
      return false;
    }
  }
    
  console.log("isOver =" + isOver);
  return isOver;
 }
 onMouseDown() {
  // No need to call super
  this.index = 1;
  if(this.#sound){
    this.#sound.stop();
    this.#sound.play();
  }
 }
 onMouseUp() {
  this.index = 0;
  if(this.#sound) {
    this.#sound.stop();

  }
  if(EGameStatusType.state === EGameStatusType.Gamer){
    testOfUserInput(this);
  }
  
 }
 createSound(aIndex){
switch(aIndex){
      case 0: // grønn
      this.#sound = new TSoundWave(EOctave.Octave6, ENoteName.C);
      break;
    case 1: // rød
      this.#sound = new TSoundWave(EOctave.Octave6, ENoteName.D);
      break;
    case 2: // gul
      this.#sound = new TSoundWave(EOctave.Octave6, ENoteName.E);
      break;
    case 3: // blå
      this.#sound = new TSoundWave(EOctave.Octave6, ENoteName.G);
      break;
  }
}





 // this.#sound = new TSoundWave(EOctave.Octave6, ENoteName.F );
 }


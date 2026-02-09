"use strict"
import { TSprite } from "libSprite";
import { EGameStatus, menu } from "./FlappyBird.mjs";
import { TSineWave } from "lib2d"; 
import { TSoundFile } from "libSound";

const sfEat = "./Media/food.mp3";
const fnHeroIsDead = "./Media/heroIsDead.mp3";
const fnGameOver = "./Media/gameOver.mp3";

export class THero extends TSprite{
   #gravity;
   #speed;
   #wave;
   #sfEat;
   #sfHeroIsDead;
   #sfGameOver;

    constructor(aSpcvs, aSPI ){
        super(aSpcvs, aSPI.hero1, 50, 100) // super roper på constructor til TSprite
        this.animationSpeed = 15 ;
        this.#gravity = 9.81 / 100;
        this.#speed = 0;
        this.debug = true;
        this.#wave = new TSineWave(1, 1);
        this.y += this.#wave.value; 
        this.#sfEat = null;
        this.#sfHeroIsDead = null;
        this.#sfGameOver = null;

    }
// trenger ikke bruke draw funksjon pga "arving"
eat() {
    if(this.#sfEat === null){
        this.#sfEat = new TSoundFile(sfEat);
    }else{
        this.#sfEat.stop();
    }
        this.#sfEat.play();
    
}

animate() {
const hasGravity = 
 EGameStatus.state === EGameStatus.gaming ||
 EGameStatus.state === EGameStatus.heroIsDead;
    if(hasGravity){
    if(this.y < 400 - this.height) {
        this.#speed += this.#gravity; // increase speed due to gravity
        this.y += this.#speed; //update position based on speed

        if( this.rotation < 90){ // limit max rotation
        this.rotation = this.#speed * 16; } // tilt down based on speed
        
    }
    else {
        EGameStatus.state = EGameStatus.gameOver;
        menu.stopSound();
        this.#sfGameOver = new TSoundFile(fnGameOver);
        this.animationSpeed = 0;
        this.#sfGameOver.play();
    }
} else if(EGameStatus.state === EGameStatus.idle){
    this.y += this.#wave.value;
}
}// End of animate

dead(){
    this.#sfHeroIsDead = new TSoundFile(fnHeroIsDead);
    this.#sfHeroIsDead.play();
}

flap(){
    this.#speed =  -3.5;
    this.rotation = 0;
}

}

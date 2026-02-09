"use strict";
import { TSprite } from "libSprite";
import { TSpriteButton } from "libSprite";
import { startGame }from "./FlappyBird.mjs";
import { TSpriteNumber } from "libSprite";
import { TSoundFile } from "libSound"; 

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu {
    #spTitle;
    #spPlayBtn;
    #spCountDown;
    #sfCountDown;
    #sfRunning;
    #spGameScore;

    constructor(aSpcvs, aSPI) {
        this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 160, 190);
        this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 200, 250);
        this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
        this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 250, 350);
        this.#spCountDown.visible = false;
        this.#sfCountDown = null;
        this.#sfRunning = null;
        this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
        this.#spGameScore.alpha = 0.65;


    }
    incGameScore(aScore){
        this.#spGameScore.value += aScore;                   
    }
    stopSound() {
        this.#sfRunning.stop();
    }

    draw() {
        this.#spTitle.draw();
        this.#spPlayBtn.draw();
        this.#spCountDown.draw();
        this.#spGameScore.draw();
    }
    countDown() {
        this.#sfRunning = new TSoundFile(fnRunning);
        if (this.#spCountDown.value > 0 ) {
            setTimeout(this.countDown.bind(this), 1000);
            this.#spCountDown.value--;
         } else {
                this.#spCountDown.visible = false;
                this.#spTitle.hidden = true;
                startGame();
                this.#sfRunning.play();
                
            }
        
        }

    
    spPlayBtnClick() {
        console.log("Click");
        this.#spPlayBtn.hidden = true;
        
        this.#spCountDown.visible = true;
        this.#spCountDown.value = 4;
        this.countDown();

        this.#sfCountDown = new TSoundFile(fnCountDown);
        this.#sfCountDown.play();
    }

}
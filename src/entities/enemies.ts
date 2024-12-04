import { generate, count } from "random-words";
import { EnemyEntityType } from "../types/interfaces";



export class Enemies {
  private enemies: EnemyEntityType[] = [];
  //private enemyID: number = 1;
  private zombieImg = document.getElementById('zombie') as HTMLImageElement;
  private difficulty: number;
  private enemieWidth: number;
  private enemieHeight: number;
  private xPosition: number;
  private yPosition: number;
  private enemySpeed: number;

  constructor(difficulty: number = 1, enemieWidth: number = 90, enemieHeight: number = 140, enemySpeed: number = 1) {
    this.difficulty = difficulty;
    this.enemieWidth = enemieWidth;
    this.enemieHeight = enemieHeight;
    this.enemySpeed = enemySpeed;
    this.xPosition = 0;
    this.yPosition = 0;

  }



  createEnemies(): void {
    if (this.enemies.length === 0) {
      for (let i: number = 0; i < this.difficulty; i += 1) {
        this.enemies.push({
          id: i,
          name: generate(),
        })
        console.log(this.enemies)
      }
    }
    else {
      null
    }

  }

  drawEnemies(context: CanvasRenderingContext2D): void {
    if (this.enemies.length === 0) {
      for (let i: number = 0; i < this.difficulty; i += 1) {
        this.enemies.push({
          id: i,
          name: generate(),
        })
        console.log(this.enemies)
      }
    }
    else {
      null
    }

    for (let i: number = 0; i < this.enemies.length; i += 1) {
      context.drawImage(this.zombieImg, this.xPosition, this.yPosition, this.enemieWidth, this.enemieHeight)

      const zombieName: string = `${this.enemies[i].name}`
      context.font = '22px Helvetica';
      context.strokeStyle = 'black';
      context.lineWidth = 4;
      context.strokeText(zombieName, (this.xPosition + 25), (this.yPosition + this.enemieHeight + 30));
      context.fillStyle = 'white';
      context.fillText(zombieName, (this.xPosition + 25), (this.yPosition + this.enemieHeight + 30));
    }
  }
}
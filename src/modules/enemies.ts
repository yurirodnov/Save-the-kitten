import { generate, count } from "random-words";
import { EnemyEntity } from "../types/interfaces";



export class Enemies {
  private enemies: EnemyEntity[] = [];
  private enemyID: number = 1;
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
    for (let i = this.enemyID; i < this.difficulty; i += 1) {
      this.enemies.push({
        id: i,
        name: generate(),
      })
      console.log('Zombie was born!')
    }
  }

  drawEnemies(context: CanvasRenderingContext2D): void {
    for (let i = 0; i <= this.enemies.length; i += 1) {
      context.drawImage(this.zombieImg, this.xPosition, this.yPosition, this.enemieWidth, this.enemieHeight)

    }
  }
}
import { generate, count } from "random-words";
import { EnemyEntityType } from "../types/interfaces";
import { KittenCoordsType } from "../types/interfaces";



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
  private kittenCoords: KittenCoordsType

  constructor(difficulty: number = 1,
    enemieWidth: number = 90,
    enemieHeight: number = 140,
    enemySpeed: number = 1,
    kittenCoords: KittenCoordsType = { x: 0, y: 0 }
  ) {
    this.difficulty = difficulty;
    this.enemieWidth = enemieWidth;
    this.enemieHeight = enemieHeight;
    this.enemySpeed = enemySpeed;
    this.xPosition = 0;
    this.yPosition = 0;
    this.kittenCoords = kittenCoords
  }

  createEnemies(): void {
    if (this.enemies.length === 0) {
      for (let i: number = 0; i < this.difficulty; i += 1) {
        this.enemies.push({
          id: i,
          name: generate(),
          speed: 1
        })
        console.log(this.enemies)
      }
    }
    else {
      null
    }
  }

  drawEnemies(context: CanvasRenderingContext2D): void {
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

  moveEnemies(): void {
    const dx = this.kittenCoords.x - this.xPosition;
    const dy = this.kittenCoords.y - this.yPosition;

    // Вычисляем расстояние от врага до цели
    const dist = Math.sqrt(Math.pow(this.kittenCoords.x - this.xPosition, 2) + Math.pow(this.kittenCoords.y - this.yPosition, 2));


    // Нормализуем вектор направления (чтобы скорость была постоянной)
    const dirX = dx / dist;
    const dirY = dy / dist;


    // Обновляем координаты врага с учетом его скорости
    this.xPosition += dirX * this.enemySpeed;
    this.yPosition += dirY * this.enemySpeed;

  }
}
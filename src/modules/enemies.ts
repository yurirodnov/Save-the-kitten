import { generate, count } from "random-words";
import { EnemyEntity } from "../types/interfaces";



export class Enemies {
  private enemies: EnemyEntity[] = [];
  private enemyID: number = 0;
  private zombieImg: HTMLImageElement;

  createEnemies(): void {

  }

  drawEnemies(context: CanvasRenderingContext2D): void {

  }
}
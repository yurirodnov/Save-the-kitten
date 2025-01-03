export interface EnemyEntityType {
  id: number;
  name: string | string[];
  speed: number;
}

export interface StatsType {
  kills: number;
  score: number;
  time: string;
}

export interface KittenCoordsType {
  x: number;
  y: number;
}
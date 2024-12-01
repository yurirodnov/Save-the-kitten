export class Score {
  private score: number;
  constructor(score: number) {
    this.score = score;
  }

  getScore(): number {
    return this.score;
  }

  setScore(newScore: number): void {
    this.score = newScore;
  }
}
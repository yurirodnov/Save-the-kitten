export class Score {
  currentScore: number;
  bestScore: number;

  constructor(currentScore: number, bestScore: number) {
    this.currentScore = currentScore;
    this.bestScore = bestScore;
  }

  getCurrentScore(): number {
    return this.currentScore;
  }

  setCurrentScore(newScore: number): void {
    this.currentScore = newScore;
  }

  getBestScore(): number {
    return this.bestScore;
  }

  setBestScore(newBestScore: number): void {
    this.bestScore = newBestScore;
  }

  drawScore(context: CanvasRenderingContext2D): void {
    const currentScoreText: string = `Score: ${this.currentScore}`
    context.font = '22px Helvetica';
    context.strokeStyle = 'black';
    context.lineWidth = 4;
    context.strokeText(currentScoreText, 10, 30);
    context.fillStyle = 'white';
    context.fillText(currentScoreText, 10, 30);



    const bestScoreText: string = `Best score: ${this.bestScore}`;
    context.font = '22px Arial';
    context.strokeStyle = 'black';
    context.lineWidth = 4;
    context.strokeText(bestScoreText, 10, 60);
    context.fillStyle = '#fffff';
    context.fillText(bestScoreText, 10, 60);

  }
}
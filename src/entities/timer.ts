export class Timer {
  private seconds: number = 0;
  private intervalID: number | undefined;


  startTimer(): void {
    this.intervalID = setInterval(() => {
      this.seconds += 1;
    }, 1000)
  }

  stopTimer(): void {
    if (this.intervalID !== undefined) {
      clearInterval(this.intervalID);
    }
  }

  drawTimer(context: CanvasRenderingContext2D) {
    const hours = Math.floor(this.seconds / 3600);
    const minutes = Math.floor((this.seconds % 3600) / 60);
    const seconds = this.seconds % 60;

    const timer = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;


    context.font = '22px Helvetica';
    context.strokeStyle = 'black';
    context.lineWidth = 4;
    context.strokeText(timer, 900, 30);
    context.fillStyle = 'white';
    context.fillText(timer, 900, 30);
  }
}
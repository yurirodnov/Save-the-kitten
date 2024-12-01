export class Backgorund {
  private canvasWidth: number;
  private canvasHeight: number;
  private backgroundImg: HTMLImageElement | null;
  private xPosition: number;
  private yPosition: number;
  private width: number;
  private height: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.backgroundImg = document.getElementById('grass') as HTMLImageElement;
    this.xPosition = 0;
    this.yPosition = 0;
    this.width = 100;
    this.height = 100;
  }

  draw(context: CanvasRenderingContext2D) {
    const imgWidth = this.width;
    const imgHeight = this.height;

    if (this.backgroundImg) {
      for (let x = 0; x < this.canvasWidth; x += imgWidth) {
        for (let y = 0; y < this.canvasHeight; y += imgHeight) {
          context.drawImage(this.backgroundImg, x, y, this.width, this.height);
        }
      }
    }

  }

  // draw(context: CanvasRenderingContext2D) {
  //   if (this.backgroundImg) {
  //     context.drawImage(this.backgroundImg, 0, 0, this.width, this.height);
  //   }
  // }
}
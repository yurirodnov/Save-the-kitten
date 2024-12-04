export class Kitten {
  private kittenWidth: number;
  private kittenHeight: number;
  private canvasWidth: number;
  private canvasHeight: number;
  private kittenImage: HTMLImageElement;
  private xPosition: number;
  private yPosition: number;

  constructor(kittenWidth: number, kittenHeight: number, canvasWidth: number, canvasHeight: number) {
    this.kittenWidth = kittenWidth;
    this.kittenHeight = kittenHeight;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.xPosition = Math.floor(this.canvasWidth / 2 - this.kittenWidth / 2);
    this.yPosition = Math.floor(this.canvasHeight / 2 - this.kittenHeight / 2);
    this.kittenImage = document.getElementById('kitten') as HTMLImageElement;
    if (!this.kittenImage) {
      throw new Error("Kitten image not found in the DOM");
    }
  }

  drawKitten(context: CanvasRenderingContext2D): void {
    context.drawImage(this.kittenImage, this.xPosition, this.yPosition, this.kittenWidth, this.kittenHeight);
  }

  getDead(): void {

  }

  sayThanks(): string {
    return "Thank you!"
  }

}
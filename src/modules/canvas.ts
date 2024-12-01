export class InitCanvas {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null;

  constructor(canvasWidth: number, canvasHeight: number, canvasID: string) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;

    if (canvasID) {
      this.canvas.id = canvasID;
    } else {
      this.canvas.id = 'canvas';
    }

    this.context = this.canvas.getContext('2d');
  }

  getCanvas() {
    return this.canvas;
  }

  getCanvasContext() {
    if (!this.context) {
      throw new Error('Canvas context is not available.');
    }
    return this.context;
  }
}

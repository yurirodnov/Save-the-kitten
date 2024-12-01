import { InitCanvas } from './modules/canvas';
import { Background } from './modules/background';
import { Kitten } from './modules/kitten';
import './styles/style.css'


window.addEventListener('load', () => {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) {
    throw new Error("Element with ID 'app' not found.");
  }

  const CANVAS_BASE_WIDTH: number = 1000;
  const CANVAS_BASE_HEIGHT: number = 740;

  const canvas = new InitCanvas(CANVAS_BASE_WIDTH, CANVAS_BASE_HEIGHT, 'canvas');
  const canvasElement = canvas.getCanvas();
  const canvasCtx = canvas.getCanvasContext();
  const background = new Background(1000, 740);
  const kitten = new Kitten(70, 70, CANVAS_BASE_WIDTH, CANVAS_BASE_HEIGHT);

  const animateGame = () => {
    background.drawBackground(canvasCtx);
    kitten.drawKitten(canvasCtx)
    requestAnimationFrame(animateGame);
  }
  animateGame();



  app?.appendChild(canvasElement);
})


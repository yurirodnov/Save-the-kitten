import { InitCanvas } from './modules/canvas';
import { Backgorund } from './modules/background';
import './styles/style.css'

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) {
  throw new Error("Element with ID 'app' not found.");
}

const canvas = new InitCanvas(1000, 740, 'canvas');
const canvasElement = canvas.getCanvas();
const canvasCtx = canvas.getCanvasContext();
const background = new Backgorund(1000, 740);

const animateGame = () => {
  background.draw(canvasCtx);
  requestAnimationFrame(animateGame);
}
animateGame();



app?.appendChild(canvasElement);
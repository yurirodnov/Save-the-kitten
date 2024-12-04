import { Canvas } from './modules/canvas';
import { Background } from './modules/background';
import { Kitten } from './modules/kitten';
import { Score } from './modules/score';
import { Timer } from './modules/timer';
import { Enemies } from './modules/enemies';
import { UI } from './modules/ui';
import './styles/styles.css'


window.addEventListener('load', () => {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) {
    throw new Error("Element with ID 'app' not found.");
  }

  const canvasBaseWidth: number = 1000;
  const canvasBaseHeight: number = 740;

  const canvas = new Canvas(canvasBaseWidth, canvasBaseHeight, 'canvas');
  const canvasElement = canvas.getCanvas();
  const canvasCtx = canvas.getCanvasContext();
  const background = new Background(1000, 740);
  const kitten = new Kitten(70, 70, canvasBaseWidth, canvasBaseHeight);
  const score = new Score(0, 0)
  const timer = new Timer();
  timer.startTimer();


  // Game loop
  const animateGame = () => {
    background.drawBackground(canvasCtx);
    kitten.drawKitten(canvasCtx)
    score.drawScore(canvasCtx);
    timer.drawTimer(canvasCtx)

    requestAnimationFrame(animateGame);
  }
  animateGame();



  app?.appendChild(canvasElement);
})


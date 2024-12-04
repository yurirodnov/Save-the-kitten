import { Canvas } from './entities/canvas';
import { Background } from './entities/background';
import { Kitten } from './entities/kitten';
import { Score } from './entities/score';
import { Timer } from './entities/timer';
import { Enemies } from './entities/enemies';
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
  const enemies = new Enemies();

  const animateGame = () => {
    background.drawBackground(canvasCtx);
    kitten.drawKitten(canvasCtx)
    score.drawScore(canvasCtx);
    timer.drawTimer(canvasCtx);

    enemies.createEnemies();
    enemies.drawEnemies(canvasCtx);

    requestAnimationFrame(animateGame);
  }
  animateGame();

  app?.appendChild(canvasElement);
})


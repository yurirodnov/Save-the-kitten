import { InitCanvas } from './modules/canvas';
import './styles/style.css'

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) {
  throw new Error("Element with ID 'app' not found.");
}

const canvas = new InitCanvas(900, 640, 'canvas');


const canvasElement = canvas.getCanvas();



app?.appendChild(canvasElement);
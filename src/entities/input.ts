export class Input {
  private input: HTMLInputElement;

  constructor() {
    this.input = document.createElement('input');
  }

  getInput(): HTMLInputElement {
    return this.input
  }
}
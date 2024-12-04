export class Input {
  private input: HTMLInputElement;



  constructor() {
    this.input = document.createElement('input');
    this.input.type = 'text';

  }

  getInput(): HTMLInputElement {
    return this.input
  }
}
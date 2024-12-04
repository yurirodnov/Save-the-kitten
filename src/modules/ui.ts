interface Zombie {
  id: number;
  name: string;
}

export class UI {
  private zombiesOnScreen: Zombie[];

  constructor(zombiesOnScreen: Zombie[]) {
    this.zombiesOnScreen = zombiesOnScreen;
  }

  drawUI(): void {

  }


}
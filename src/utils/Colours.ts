export enum Colour {
  RED = 'red',
  BLUE = 'blue',
  GREEN = 'green',
}

export class ColourUtils {
  public static getRandomColour(): Colour {
    const colours = Object.values(Colour);

    const rnd = Math.floor(Math.random() * colours.length);

    return colours[rnd];
  }

  public static getRandomColourExclude(excludeColour: Colour) {
    const colours = Object.values(Colour).filter((c) => c != excludeColour);

    const rnd = Math.floor(Math.random() * colours.length);

    return colours[rnd];
  }
}

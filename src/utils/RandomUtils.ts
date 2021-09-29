export class RandomUtils {
  private static characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  public static getRandomRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  public static getRandomRangeFloat(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  public static getRandomId(length: number) {
    let id = '';
    const charLength = this.characters.length;
    for (let i = 0; i < length; i++) {
      id += this.characters.charAt(Math.floor(Math.random() * length));
    }

    return id;
  }
}

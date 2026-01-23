export default class PlateauSize {
  #x = 1;
  #y = 1;

  constructor(x, y) {
    // Construct with x,y coordinates
    this.#x = x;
    this.#y = y;
  }

  isWithinBounds(x, y) {
    const isWithinWidth = x <= this.#x && x >= 0;
    const isWithinHeight = y <= this.#y && y >= 0;

    return isWithinWidth && isWithinHeight;
  }
}

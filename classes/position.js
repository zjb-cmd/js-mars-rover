import compassDirections from "../layers/compassDirections";

export default class Position {
  #x;
  #y;
  #facingDirection;

  set position(pos) {
    // Format eg. "1 2 N"
    const posArr = pos.split(" ");
    this.#x = posArr[0];
    this.#y = posArr[1];
    this.#facingDirection = posArr[2];
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }

  get facingDirection() {
    return this.#facingDirection;
  }
}

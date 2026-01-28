import compassDirections from "./types/compassDirections";

export default class Position {
  #x;
  #y;
  #facingDirection;

  set x(x) {
    this.#x = x;
  }

  set y(y) {
    this.#y = x;
  }

  set facingDirection(fD) {
    this.#facingDirection = fD;
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

  get position() {
    return `${this.#x} ${this.#y} ${this.#facingDirection}`;
  }
}

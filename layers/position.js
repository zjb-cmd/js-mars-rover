import compassDirections from "../layers/compassDirections";

export default class Position {
  #x;
  #y;
  #facingDirection;

  set x(x) {
    this.#x = compassDirections(x);
  }

  set y(y) {
    this.#y = compassDirections(x);
  }

  set facingDirection(fD) {
    this.#facingDirection = compassDirections(fD);
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

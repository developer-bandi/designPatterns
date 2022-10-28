class Singleton {
  static #instance;
  constructor() {
    if (!Singleton.#instance) {
      Singleton.#instance = this;
    }
    return Singleton.#instance;
  }

  static getInstance() {
    if (!this.#instance) {
      this.#instance = new this();
    }
    return this.#instance;
  }
}

const object1 = Singleton.getInstance();
const object2 = Singleton.getInstance();

console.log(object1 === object2); // true

class Calculation {
  constructor(strategy, target) {
    this.numTarget = target.num;
    this.charTarget = target.char;
    this.strategy = strategy;
  }
  num() {
    return this.strategy.num(this.numTarget);
  }
  char() {
    return this.strategy.char(this.charTarget);
  }
}

class Plus {
  num(target) {
    return target.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
  }

  char(target) {
    return target.join("");
  }
}

class Minus {
  num(target) {
    return target.reduce((prev, cur) => {
      return prev - cur;
    }, 0);
  }
  char(target) {
    return target.join("-");
  }
}

const main = () => {
  const test1 = new Calculation(new Plus(), {
    num: [1, 2, 3, 4, 5],
    char: ["a", "b", "c", "d", "e"],
  });
  const test2 = new Calculation(new Minus(), {
    num: [1, 2, 3, 4, 5],
    char: ["a", "b", "c", "d", "e"],
  });
  console.log(test1.num());
  console.log(test1.char());
  console.log(test2.num());
  console.log(test2.char());
};

main();

class bag {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
  accept(visitor) {
    visitor.visit(this);
  }
}

class shoes {
  constructor(name, price, size) {
    this.name = name;
    this.price = price;
    this.size = size;
  }

  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
  getSize() {
    return this.size;
  }
  accept(visitor) {
    visitor.visit(this);
  }
}

class basket {
  visit(element) {
    if (element.getSize === undefined) {
      console.log(`${element.getName()}은 ${element.getPrice()}원 입니다`);
    } else {
      console.log(
        `${element.getName()}은 ${element.getPrice()}원 이며 사이즈는 ${element.getSize()} 입니다`
      );
    }
  }
}

const main = () => {
  const elements = [
    new bag("책가방", 5000),
    new bag("토트백", 3000),
    new shoes("운동화", 4000, 230),
    new shoes("스니커즈", 1000, 240),
  ];

  const visitor = new basket();

  elements.forEach((element) => {
    element.accept(visitor);
  });
};

main();

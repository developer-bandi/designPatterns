class Shoes {
  name;
  count;
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getCount() {
    return this.count;
  }
  setCount(count) {
    this.count = count;
  }
}

class Boots extends Shoes {
  constructor(name, count) {
    super(name, count);
    this.setName(name);
    this.setCount(count);
  }
}

class Sneakers extends Shoes {
  constructor(name, count) {
    super(name, count);
    this.setName(name);
    this.setCount(count);
  }
}

class BootsFactory {
  static createShoes(name, count) {
    return new Boots(name, count);
  }
}

class SneakersFactory {
  static createShoes(name, count) {
    return new Sneakers(name, count);
  }
}

const shoeArr = {
  boots: BootsFactory,
  sneakers: SneakersFactory,
};

const data = [
  ["신상부츠", 5],
  ["신상스니커즈", 3],
];

class shoesFactory {
  static createShoes(type, name, count) {
    return shoeArr[type].createShoes(name, count);
  }
}

const main = () => {
  Object.keys(shoeArr).forEach((key, index) => {
    const obj = shoesFactory.createShoes(key, data[index][0], data[index][1]);
    console.log(obj.name, obj.count);
  });
};

main();

class Car {
  name;
  color;
  type;
  constructor(name, color, type) {
    this.name = name;
    this.color = color;
    this.type = type;
  }
}

class Type {
  size;
  capacity;
  constructor(size, capacity) {
    this.size = size;
    this.capacity = capacity;
  }
}

class TypeFactory {
  static type = {};

  static getType(size, capacity) {
    if (TypeFactory.type[size + capacity] === undefined) {
      TypeFactory.type[size + capacity] = new Type(size, capacity);
    }
    return TypeFactory.type[size + capacity];
  }
}

const main = () => {
  const car1 = new Car("fisrtCar", "red", TypeFactory.getType("중형", 11));
  const car2 = new Car("secondCar", "blue", TypeFactory.getType("소형", 5));
  console.log(car1.color, car1.name, car1.type.size, car1.type.capacity);
  console.log(car2.color, car2.name, car2.type.size, car2.type.capacity);
};

main();

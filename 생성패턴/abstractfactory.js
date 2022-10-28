class DefaultShoesFactory {
  static shoseFactory(type) {
    switch (type) {
      case "boots":
        return new BootsFactory();
      case "sneakers":
        return new SneakersFactory();
    }
  }
}

class Material {
  type;
  getType() {
    return this.type;
  }
  setType(type) {
    this.type = type;
  }
}

class Weight {
  degree;
  getType() {
    return this.degree;
  }
  setType(degree) {
    this.degree = degree;
  }
}

class Leather extends Material {
  constructor() {
    super();
    this.setType("leather");
  }
}

class Canvas extends Material {
  constructor() {
    super();
    this.setType("canvas");
  }
}

class High extends Weight {
  constructor() {
    super();
    this.setType("high");
  }
}

class Low extends Weight {
  constructor() {
    super();
    this.setType("low");
  }
}

class BootsFactory {
  makeShose() {
    this.setMaterial();
    this.setWeight();
  }
  setMaterial() {
    const material = new Leather();
    console.log(material.type);
  }
  setWeight() {
    const weight = new High();
    console.log(weight.degree);
  }
}

class SneakersFactory {
  makeShose() {
    this.setMaterial();
    this.setWeight();
  }
  setMaterial() {
    const material = new Canvas();
    console.log(material.type);
  }
  setWeight() {
    const weight = new Low();
    console.log(weight.degree);
  }
}

const data = ["boots", "sneakers"];

const main = () => {
  data.forEach((type) => {
    const obj = DefaultShoesFactory.shoseFactory(type);
    obj.makeShose();
  });
};

main();

class White {
  setColor() {
    this.color = "하얀색";
    return this.color;
  }
}

class Blue {
  setColor() {
    this.color = "파란색";
    return this.color;
  }
}

class Cloth {
  color;
  constructor(colorObj) {
    this.color = colorObj.setColor();
  }
}

class TShirts extends Cloth {
  constructor(colorObj) {
    super(colorObj);
  }
  checkType() {
    console.log(`${this.color}색 티셔츠입니다`);
  }
}

class YShirts extends Cloth {
  constructor(colorObj) {
    super(colorObj);
  }
  checkType() {
    console.log(`${this.color}색 와이셔츠입니다`);
  }
}

const main = () => {
  const WhiteYShirts = new YShirts(new White());
  WhiteYShirts.checkType();
  const BlueTShirts = new TShirts(new Blue());
  BlueTShirts.checkType();
};

main();

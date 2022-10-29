class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  //내부적으로 getPrice 함수를 정의한 인터페이스를 따른다고 가정
  getPrice() {
    return this.price;
  }
}

class basket {
  constructor() {
    this.list = [];
  }
  addItem(item) {
    this.list.push(item);
  }
  //내부적으로 getPrice 함수를 정의한 인터페이스를 따른다고 가정
  getPrice() {
    return this.list.reduce((prev, cur) => prev + cur.price, 0);
  }
}

const main = () => {
  const printPrice = (obj) => {
    console.log(obj.getPrice());
  };
  const item1 = new Item("firstItem", 1000);
  const item2 = new Item("secondItem", 2000);
  const shoppingBasket = new basket();
  shoppingBasket.addItem(item1);
  shoppingBasket.addItem(item2);
  printPrice(item1);
  printPrice(item2);
  printPrice(shoppingBasket);
};

main();

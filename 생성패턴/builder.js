class Product {
  constructor(name, price, category, discountRate, leftCount) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.discountRate = discountRate;
    this.leftCount = leftCount;
  }
}

class ProductBuilder {
  name;
  price;
  category;
  discountRate = 0;
  leftCount = 0;
  setName(name) {
    this.name = name;
    return this;
  }
  setPrice(price) {
    this.price = price;
    return this;
  }
  setCategory(category) {
    this.category = category;
    return this;
  }
  setDiscount(rate) {
    this.discountRate = rate;
    return this;
  }
  setLeftCount(count) {
    this.leftCount = count;
    return this;
  }
  getProduct() {
    return new Product(
      this.name,
      this.price,
      this.category,
      this.discountRate,
      this.leftCount
    );
  }
}

class ProductDirector {
  builder;
  constructor(builder) {
    this.builder = builder;
  }
  BargainSaleSnack(name) {
    return this.builder
      .setName(name)
      .setPrice("990")
      .setCategory("과자")
      .setDiscount(50)
      .setLeftCount(100)
      .getProduct();
  }

  initalRegister(name, price, category) {
    return this.builder
      .setName(name)
      .setPrice(price)
      .setCategory(category)
      .getProduct();
  }
}

const main = () => {
  const director = new ProductDirector(new ProductBuilder());
  const product1 = director.BargainSaleSnack("프링글스");
  const product2 = director.initalRegister("삼다수", 2000, "물");
  console.log(
    product1.name,
    product1.price,
    product1.category,
    product1.discountRate,
    product1.leftCount
  );
  console.log(
    product2.name,
    product2.price,
    product2.category,
    product2.discountRate,
    product2.leftCount
  );
};

main();

class Book {
  constructor(name) {
    this.name = name;
  }

  setCount(count) {
    this.count = count;
    console.log(`책 개수 ${count}개로 설정`);
  }

  buy() {
    console.log(`${this.name} ${this.count}권 구매`);
  }
}

class Gift {
  constructor(name) {
    this.name = name;
  }
  select() {
    console.log(`${this.name} 사은품 선택`);
  }
  notSelect() {
    console.log(`${this.name} 사은품 선택하지 않음`);
  }
}

class Address {
  setAddress(address) {
    this.address = address;
    console.log(`${this.address}로 주소설정`);
  }
}

class Facade {
  static buyBook(name, count, address) {
    const bookObj = new Book(name);
    const giftObj = new Gift("책갈피");
    const addressObj = new Address();

    bookObj.setCount(count); // 구매할 책 갯수 설정
    giftObj.select(); // 선물 선택 혹은 선택하지 않음
    addressObj.setAddress(address); // 주소 설정
    bookObj.buy(); // 책 구매
  }
}

const main = () => {
  Facade.buyBook("나의 라임 오렌지 나무", 3, "대전광역시 중구");
};

main();

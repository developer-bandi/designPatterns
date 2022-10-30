class Iterator {
  constructor() {
    this.arr = [];
    this.cur = 0;
  }
  addValue(value) {
    this.arr.push(value);
  }
  hasNext() {
    if (this.arr[this.cur] === undefined) {
      return false;
    }
    return true;
  }

  next() {
    return this.arr[this.cur++];
  }
}

const main = () => {
  const IteratorObj = new Iterator();
  IteratorObj.addValue(1);
  IteratorObj.addValue(2);
  IteratorObj.addValue(3);

  while (IteratorObj.hasNext()) {
    console.log(IteratorObj.next());
  }
};

main();

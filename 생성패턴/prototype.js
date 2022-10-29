class longTimeWork {
  flag = false;
  text;
  constructor() {
    setTimeout(() => {
      // 3초후에 텍스트 입력가능
      this.flag = true;
    }, 3000);
  }
  setText(text) {
    if (this.flag) {
      this.text = text;
      console.log(this.text);
    }
  }
}

const main = () => {
  const work1 = new longTimeWork();
  setTimeout(() => {
    work1.setText("test1");
    const work2 = Object.assign(Object.create(longTimeWork.prototype), work1);
    work2.setText("test2");
  }, 4000);
};

main();

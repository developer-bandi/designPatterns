class Display {
  write() {}
}

class NormalDisplay extends Display {
  write() {
    console.log("보통 글쓰기");
  }
}

class TextDecorator extends Display {
  constructor(decorator) {
    super(decorator);
    this.decorator = decorator;
  }
  write() {
    this.decorator.write();
  }
}

class UnderlineDecorator extends TextDecorator {
  constructor(decorator) {
    super(decorator);
  }
  write() {
    super.write();
    this.makeUnderline();
  }
  makeUnderline() {
    console.log("밑줄 긋기");
  }
}

class RedColorDecorator extends TextDecorator {
  constructor(decorator) {
    super(decorator);
  }
  write() {
    super.write();
    this.makeColorRed();
  }
  makeColorRed() {
    console.log("빨간색으로 만들기");
  }
}

const main = () => {
  const text = new NormalDisplay();
  text.write();
  console.log("--------------------");
  const underlineText = new UnderlineDecorator(new NormalDisplay());
  underlineText.write();
  console.log("--------------------");
  const redColorText = new RedColorDecorator(new NormalDisplay());
  redColorText.write();
  console.log("--------------------");
  const underlineRedColorText = new UnderlineDecorator(
    new RedColorDecorator(new NormalDisplay())
  );
  underlineRedColorText.write();
};

main();

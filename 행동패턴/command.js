class Command {
  execute() {}
}

class Book {
  open() {
    console.log("책을 폅니다");
  }

  read() {
    console.log("책을 읽습니다");
  }

  closed() {
    console.log("책을 덮습니다");
  }
}

class OpenBookCommand extends Command {
  constructor(bookObj) {
    super(bookObj);
    this.bookObj = bookObj;
  }

  execute() {
    this.bookObj.open();
  }
}

class ReadBookCommand extends Command {
  constructor(bookObj) {
    super(bookObj);
    this.bookObj = bookObj;
  }

  execute() {
    this.bookObj.read();
  }
}

class ClosedBookCommand extends Command {
  constructor(bookObj) {
    super(bookObj);
    this.bookObj = bookObj;
  }

  execute() {
    this.bookObj.closed();
  }
}

class Button {
  click(command) {
    command.execute();
  }
}

const main = () => {
  const button = new Button();
  button.click(new OpenBookCommand(new Book()));
  button.click(new ReadBookCommand(new Book()));
  button.click(new ClosedBookCommand(new Book()));
};

main();

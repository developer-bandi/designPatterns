class Human {
  walk() {
    console.log("걸어갑니다");
  }

  run() {
    console.log("달립니다");
  }
  talk() {}
}

class Korean extends Human {
  talk() {
    console.log("한국어로 말합니다");
  }
}
class Chinese extends Human {
  talk() {
    console.log("중국어로 말합니다");
  }
}
class American extends Human {
  talk() {
    console.log("영어로 말합니다");
  }
}

const main = () => {
  const persons = [new Korean(), new Chinese(), new American()];
  persons.forEach((person) => {
    person.walk();
    person.run();
    person.talk();
    console.log("----------------------");
  });
};

main();

class Guest {
  constructor(name) {
    this.name = name;
    this.frontDesk = new Frontdesk();
  }
  getName() {
    return this.name;
  }
  clean() {
    this.frontDesk.clean(this.name);
  }

  dinner() {
    this.frontDesk.dinner(this.name);
  }
}

class CleanService {
  clean(name) {
    console.log(`${name}님의 방을 청소합니다`);
  }
}

class Restraunt {
  dinner(name) {
    console.log(`${name}님이 저녁식사를 합니다`);
  }
}

class Frontdesk {
  constructor() {
    this.restraunt = new Restraunt();
    this.cleanService = new CleanService();
  }

  dinner(name) {
    this.restraunt.dinner(name);
  }

  clean(name) {
    this.cleanService.clean(name);
  }
}

const main = () => {
  const person = new Guest("홍길동");
  person.clean();
  person.dinner();
};

main();

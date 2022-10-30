class Store {
  constructor(name) {
    this.name = name;
    this.subscribers = [];
  }
  subscribe(component) {
    this.subscribers.push(component);
  }
  unSubscribe() {
    this.subscribers.push(component);
  }
  storeChange() {
    this.notify();
  }
  notify() {
    this.subscribers.forEach((component) => {
      component.knowChange(this.name);
    });
  }
}

class Component {
  constructor(name) {
    this.name = name;
  }
  knowChange(name) {
    console.log(`${this.name}컴포넌트가 ${name}변경된 사항을 전파받음`);
  }
}

const main = () => {
  const Store1 = new Store("첫번째 스토어");
  const Store2 = new Store("두번째 스토어");
  const Component1 = new Component("첫번째 컴포넌트");
  const Component2 = new Component("두번째 컴포넌트");

  Store1.subscribe(Component1);
  Store1.subscribe(Component2);
  Store2.subscribe(Component1);

  Store1.storeChange();
  console.log("------------------------------------------------------------");
  Store2.storeChange();
};

main();

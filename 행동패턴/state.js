class On {
  on() {
    throw "켜져있는 상태입니다";
  }

  off(light) {
    console.log("불을 끕니다");
    light.state = new Off();
  }
}

class Off {
  on(light) {
    console.log("불을 켭니다");
    light.state = new On();
  }

  off() {
    throw "꺼져있는 상태입니다";
  }
}

class Light {
  constructor(state) {
    this.state = state;
  }

  on() {
    this.state.on(this);
  }
  off() {
    this.state.off(this);
  }
}

const main = () => {
  const light = new Light(new On());
  light.off();
  light.on();
};

main();

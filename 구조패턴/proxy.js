class movie {
  see() {
    console.log("영화를 봅니다");
  }
}

class movieLogProxy extends movie {
  see() {
    console.log("로직을 시작합니다");
    super.see();
    console.log("로직을 종료합니다");
  }
}

const main = () => {
  const proxy = new movieLogProxy();
  proxy.see();
};

main();

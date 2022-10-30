class logger {
  writeLog(nextLog) {
    if (nextLog === null) {
      console.log("호출 종료");
    } else {
      nextLog.writeLog();
    }
  }
}

class log1 extends logger {
  constructor(nextLog) {
    super(nextLog);
    this.nextLog = nextLog;
  }
  writeLog() {
    console.log("로그1");
    super.writeLog(this.nextLog);
  }
}

class log2 extends logger {
  constructor(nextLog) {
    super(nextLog);
    this.nextLog = nextLog;
  }
  writeLog() {
    console.log("로그2");
    super.writeLog(this.nextLog);
  }
}

class log3 extends logger {
  constructor(nextLog) {
    super(nextLog);
    this.nextLog = nextLog;
  }
  writeLog() {
    console.log("로그3");
    super.writeLog(this.nextLog);
  }
}

const main = () => {
  const chain = new log1(new log2(new log3(null)));
  chain.writeLog();
};

main();

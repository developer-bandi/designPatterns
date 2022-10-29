class cTypeUsb {
  connect() {
    console.log("c타입 연결");
  }
}

class ATypeUsb {
  connectA() {
    console.log("A타입 연결");
  }
}

class Adapter {
  constructor(usb) {
    this.usb = usb;
  }
  connect() {
    console.log("어댑터를 이용합니다");
    this.usb.connectA();
  }
}

const main = () => {
  const usbC = new cTypeUsb();
  const usbA = new Adapter(new ATypeUsb());
  usbC.connect();
  usbA.connect();
};

main();

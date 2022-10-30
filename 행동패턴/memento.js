class Editor {
  constructor(text) {
    this.text = text;
  }

  setText(text) {
    this.text = text;
  }
  getText() {
    return this.text;
  }
  saveText() {
    return new EditorSave(this.text);
  }
  restore(editorSave) {
    this.text = editorSave.getText();
  }
}

class EditorSave {
  constructor(text) {
    this.text = text;
  }

  getText() {
    return this.text;
  }
}

const main = () => {
  const text1 = new Editor("initalText");
  console.log(text1.getText());
  const memento = text1.saveText();
  text1.setText("changedText");
  console.log(text1.getText());
  text1.restore(memento);
  console.log(text1.getText());
};

main();

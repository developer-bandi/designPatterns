class TerminalExpression {
  constructor(data) {
    this.data = data;
  }

  interpreter(test) {
    if (this.data.indexOf(test) !== -1) {
      return true;
    }
    return false;
  }
}

class OrExpression {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  interpreter(test) {
    return this.left.interpreter(test) || this.right.interpreter(test);
  }
}

class AndExpression {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  interpreter(test) {
    return this.left.interpreter(test) && this.right.interpreter(test);
  }
}

const main = () => {
  const expression1 = new TerminalExpression("AB");
  const expression2 = new TerminalExpression("BB");
  const OrExpressionObj = new OrExpression(expression1, expression2);
  const AndExpressionObj = new AndExpression(expression1, expression2);

  console.log(OrExpressionObj.interpreter("A"));
  console.log(OrExpressionObj.interpreter("B"));
  console.log(AndExpressionObj.interpreter("A"));
  console.log(AndExpressionObj.interpreter("B"));
};

main();

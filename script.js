function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};

function operate(num1, operator, num2) {
  switch(operator) {
    case '+':
      return add(num1, num2)
      break;
    case '-':
      return subtract(num1, num2)
      break;
    case '*':
      return multiply(num1, num2)
      break;
    case '/':
      if (num2 === 0) {
        alert("Can't divide by 0!");
      } else {
        return divide(num1, num2)
      };
      break;
  };
};

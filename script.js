const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.num-btns');
const operatorButtons = document.querySelectorAll('.op-btns');
const equalButton = document.querySelector('#equal-btn');
const functionButtons = document.querySelectorAll('.function-btn');

let firstInput = 0;
let secondInput = 0;
let operatorInput = '';

function toDefault() {
  firstInput = 0;
  secondInput = 0;
  operatorInput = 0;
};

// Create function to display pressed numbers on the calculator screen
numberButtons.forEach(numButton => {
  numButton.addEventListener('click', () => {
    let btnContent = numButton.innerText;
    if(display.textContent.length >= 11) {
      return;
    };
    if(btnContent === '.' && display.textContent.includes('.')) {
      return;
    } else if(display.textContent.includes('Infinity') || display.textContent.includes('NaN') || display.textContent.includes("error")) {
      display.textContent = btnContent;
      toDefault();
    } else {
      display.textContent += btnContent;
    };
  });
});

// Create function to store a number and operator in a variable
operatorButtons.forEach(opButton => {
  opButton.addEventListener('click', () => {
    if(display.textContent === '' && operatorInput === '') {
      return;
    };
    if(firstInput === 0 && display.textContent !== '') {
      firstInput = display.textContent;
      operatorInput = opButton.innerText;
      display.textContent = '';
    } else {
      secondInput = display.textContent;
      operate(firstInput, operatorInput, secondInput);
      firstInput = display.textContent;
      operatorInput = opButton.innerText;
      display.textContent = '';
    };
  });
});

// Create function to display the answer to your sum
equalButton.addEventListener('click', () => {
  secondInput = display.textContent;
  if(operatorInput === '') {
    return;
  } else {
    operate(firstInput, operatorInput, secondInput);
    toDefault();
  };
});

// Create function to do a function buttons task when clicked
functionButtons.forEach(funcButton => {
  funcButton.addEventListener('click', () => {
    let btnContent = funcButton.innerText;
    if(btnContent === 'AC') {
      display.textContent = '';
      toDefault();
    };
    if(btnContent === 'C') {
      if(display.textContent === '') {
        return;
      } else {
        display.textContent = display.textContent.slice(0, -1);
      };
    };
    if(btnContent === '+/-') {
      if(display.textContent === '') {
        return;
      } else {
        display.textContent = -(parseFloat(display.textContent));
      };
    };
    if(btnContent === '%') {
      if(display.textContent === '') {
        return;
      } else {
        display.textContent = (parseFloat(display.textContent) / 100);
      };
    };
  });
});

// Create basic math functions
function add(a, b) {
  return parseFloat(a) + parseFloat(b);
};

function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
};

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
};

function divide(a, b) {
  if(parseFloat(b) === 0) {
    return "error"
  } else {
    return parseFloat(a) / parseFloat(b);
  };
};

//Create function that takes 2 numbers and an operator and then calls a math function
function operate(num1, operator, num2) {
  let result = '';
  switch(operator) {
    case '+':
      result = add(num1, num2)
      display.textContent = result.toString().slice(0, 11)
      break;
    case '-':
      result = subtract(num1, num2)
      display.textContent = result.toString().slice(0, 11)
      break;
    case 'x':
      result = multiply(num1, num2)
      display.textContent = result.toString().slice(0, 11)
      break;
    case '/':
      result = divide(num1, num2)
      display.textContent = result.toString().slice(0, 11)
      break;
    default:
      return
  };
};


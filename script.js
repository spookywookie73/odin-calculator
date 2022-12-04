const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.num-btns');

// Create function to display pressed numbers on the calculator screen
numberButtons.forEach(numButton => {
  numButton.addEventListener('click', () => {
    let btnContent = numButton.innerText;
    display.textContent = btnContent;
  });
});

// Create basic math functions
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

//Create function that takes 2 numbers and an operator and then calls a math function
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


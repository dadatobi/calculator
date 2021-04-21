const numberButton = document.querySelectorAll('.btn');
const operatorButton = document.querySelectorAll('.operator');
const screen = document.querySelector('.screen2');
const screen1 = document.querySelector('.screen1');
const clearButton = document.querySelector('.clear');
const points = document.querySelector('.point');
const remove = document.querySelector('.delete');
const equal = document.querySelector('.equal');

let firstOperand; 
let currentOperators = null; 
let secondOperand;

// Displaying the number click
numberButton.forEach((button) => {
 button.addEventListener('click', () => addNumber(button.textContent));
});

// clearing the screen
clearButton.addEventListener('click', clearScreen);

// delete the last number on display
remove.addEventListener('click' , deleteNumber);

// Adding decimal point
points.addEventListener('click', addPoint);

// setting the operator value
operatorButton.forEach((button) => {
  button.addEventListener('click', ()=> setOperator(button.value));
});

// performing required operation
equal.addEventListener('click', performOperation);

//making input and other operation work via keyboard
window.addEventListener('keydown', keyBoardKey);

function addNumber(number) {
  if (screen.textContent === '0') {
    screen.textContent = number;
  }else{
    screen.textContent += number;
  };
};

function clearScreen(){
  screen.textContent = "0";
  screen1.textContent = "";
  firstOperand = "";
  secondOperand = "";
  currentOperator = '';
};

function deleteNumber() {
  screen.textContent = screen.textContent.toString().slice(0, -1);
  if (screen.textContent ===''){
    screen.textContent = '0';
  };
};

function addPoint() {
  if (screen.textContent.includes('.') ) {
    return;
  } else {
    screen.textContent += '.';
  };
};

function setOperator(operator) {
  if ((screen.textContent === '' || screen.textContent === '0') && button.value === '/'){
    return null;
  } else {
    firstOperand = Number(screen.textContent);
    currentOperator = operator;
    screen1.textContent = screen.textContent +' ' + currentOperator;
  };
  screen.textContent = '0';
};

function performOperation() {
  if (currentOperator === '') return;
  if(currentOperator === '/' && secondOperand === 0){
    screen.textContent = 'cannot divide by zero';
  }else {
    secondOperand = Number(screen.textContent);
    screen1.textContent = firstOperand +' ' + currentOperator + ' ' + secondOperand;
    screen.textContent = Math.round(operates(currentOperator, firstOperand, secondOperand) * 1000)/ 1000;
  };
};

function keyBoardKey(e) {
  if (e.key >= 0 && e.key <= 9) addNumber(e.key);
  if (e.key === ".") addPoint();
  if (e.key === "=" || e.key === "Enter") performOperation();
  if (e.key === "Backspace") deleteNumber();
  if (e.key === "Escape") clearScreen();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    setOperator(e.key);
}

// function to add two numbers
function add(a, b){
  return a + b;
};

// function to perform subtraction 
function subtract(a, b) {
  return a - b;
};

// function to perform multiplication
function multiply(a, b) {
  return a * b;
};

// function to perform division
function divide(a, b) {
  return a / b;
};

// funtion that switches between all operator
function operates(operator, a, b) {
  switch(operator){
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return null;
  }
};

let num1;
let num2;
let operator;
const buttons = document.querySelectorAll("button");

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
    case "%":
      return percentage(num1, num2);
      break;
  }
}

function percentage(num1, num2) {
  return Math.round(((num1 * 100) / num2) * 100) / 100 + "%";
}

function add(num1, num2) {
  return Math.round((num1 + num2) * 100) / 100;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "lmao";
  } else {
    return Math.round((num1 / num2) * 100) / 100;
  }
}

function multiply(num1, num2) {
  return Math.round(num1 * num2 * 100) / 100;
}
function deleteDisplay(display) {
  display.value = "";
}

function deleteChar(display) {
  display.value = display.value.substring(0, display.value.length - 1);
}

function inputContent() {
  const display = document.querySelector(".input");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.textContent) {
        case "7":
          display.value += "7";
          break;
        case "6":
          display.value += "6";
          break;
        case "8":
          display.value += "8";
          break;
        case "9":
          display.value += "9";
          break;
        case "0":
          display.value += "0";
          break;
        case "1":
          display.value += "1";
          break;
        case "2":
          display.value += "2";
          break;
        case "3":
          display.value += "3";
          break;
        case "4":
          display.value += "4";
          break;
        case "5":
          display.value += "5";
          break;
        case "÷":
          display.value += "/";
          break;
        case "+":
          display.value += "+";
          break;
        case "-":
          display.value += "-";
          break;
        case "x":
          display.value += "*";
          break;
        case "AC":
          deleteDisplay(display);
          break;
        case "%":
          display.value += "%";
          break;
        case "⌫":
          deleteChar(display);
          break;
        case ".":
          display.value += ".";
          break;
        case "=":
          process(display);
          if (num1 != null && num2 != null && operator != null) {
            deleteDisplay(display);
            display.value += operate(num1, operator, num2);
          }
          break;
      }
    });
  });
}

function process(display) {
  if (display.value.charAt(0) === "-") {
    numbers = display.value.split(/[\+\*\/\(\)]/);
    num1 = Number(numbers[0]);
  } else {
    numbers = display.value.split(/[\+\-\*\/\%]/);
    num1 = Number(numbers[0]);
  }
  num2 = Number(numbers[1]);

  if (display.value.charAt(0) === "-") {
    nonNumber = display.value.match(/[^a-zA-Z0-9.\-\(\)]/);
    operator = nonNumber[0];
  } else {
    nonNumber = display.value.match(/[^a-zA-Z0-9.]/);
    operator = nonNumber[0];
  }
  console.log(nonNumber);
  console.log(numbers[0]);
  console.log(num2);
  console.log(operator);
}
inputContent();

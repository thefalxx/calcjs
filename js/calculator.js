// const inputBox = document.getElementById("inputBox");

// function addToInput(value) {
//   inputBox.value += value;
// }

// function clearInput() {
//   inputBox.value = "";
// }

// function calculate() {
//   try {
//     const result = eval(inputBox.value); 
//     inputBox.value = result;
//   } catch (error) {
//     inputBox.value = "Error";
//   }
// }

var operand1 = 0;
var operator = "";
var operand2 = 0;

function add() {
  operand1 = parseFloat(document.getElementById("textbox").value);
  operator = "+";
  document.getElementById("textbox").value = "";
}

function subtract() {
  operand1 = parseFloat(document.getElementById("textbox").value);
  operator = "-";
  document.getElementById("textbox").value = "";
}

function multiply() {
  operand1 = parseFloat(document.getElementById("textbox").value);
  operator = "*";
  document.getElementById("textbox").value = "";
}

function divide() {
  operand1 = parseFloat(document.getElementById("textbox").value);
  operator = "/";
  document.getElementById("textbox").value = "";
}

function clearInput() {
    textbox.value="";
}

function calculate() {
  operand2 = parseFloat(document.getElementById("textbox").value);
  var result = 0;

  switch (operator) {
    case "+":
      result = operand1 + operand2;
      break;
    case "-":
      result = operand1 - operand2;
      break;
    case "*":
      result = operand1 * operand2;
      break;
    case "/":
      result = operand1 / operand2;
      break;
  }

  document.getElementById("textbox").value = result;
}


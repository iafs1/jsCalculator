let display = document.querySelector(".calculator-display");
let memoryNumber = 0;
let displayNumber;
let currentOperation = "none";
let emptyOnNextClick = false;
let calculatorState = "off";

let clearButton = document.querySelector(".clearButton");
let backspaceButton = document.querySelector(".backspaceButton");
let offButton = document.querySelector(".offButton");
let onButton = document.querySelector(".onButton");
let sevenButton = document.querySelector(".sevenButton");
let eightButton = document.querySelector(".eightButton");
let nineButton = document.querySelector(".nineButton");
let divideButton = document.querySelector(".divideButton");
let fourButton = document.querySelector(".fourButton");
let fiveButton = document.querySelector(".fiveButton");
let sixButton = document.querySelector(".sixButton");
let multiplyButton = document.querySelector(".multiplyButton");
let oneButton = document.querySelector(".oneButton");
let twoButton = document.querySelector(".twoButton");
let threeButton = document.querySelector(".threeButton");
let minusButton = document.querySelector(".minusButton");
let zeroButton = document.querySelector(".zeroButton");
let dotButton = document.querySelector(".dotButton");
let equalButton = document.querySelector(".equalButton");
let plusButton = document.querySelector(".plusButton");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function updateDisplay() {
    display.innerText = memoryNumber > 999999999 ? "Error" : memoryNumber;
}

function clearParameters() {
    memoryNumber = 0;
    displayNumber = 0;
    currentOperation = "none";
    emptyOnNextClick = false;
}

function operate(a, b, operation) {
    displayNumber = Number(display.innerText);
    b = displayNumber;
    switch (operation) {
        case "+":
            memoryNumber = add(a, b);
            break;
        case "-":
            memoryNumber = subtract(a, b);
            break;
        case "*":
            memoryNumber = multiply(a, b);
            break;
        case "/":
            memoryNumber = divide(a, b);
            break;
    }
    updateDisplay();
}

clearButton.addEventListener("click", () => {
    display.innerText = "0";
    clearParameters();
    emptyOnNextClick = true;
});

backspaceButton.addEventListener("click", () => {
    alert("Função ainda não implementada!")
});

offButton.addEventListener("click", () => {
    display.innerText = "";
    clearParameters();
    calculatorState = "off";
});

onButton.addEventListener("click", () => {
    display.innerText = "0";
    clearParameters();
    calculatorState = "on";
    emptyOnNextClick = true;
});

function appendNumber(number) {
    if (calculatorState === "off") {
        return;
    }
    if (display.innerText.length >= 9) {
        return;
    }
    if (emptyOnNextClick) {
         emptyOnNextClick = false;
         display.innerText = number;
    } else {
         display.innerText += number;
    }    
}

nineButton.addEventListener("click", () => appendNumber(9));
eightButton.addEventListener("click", () => appendNumber(8));
sevenButton.addEventListener("click", () => appendNumber(7));
sixButton.addEventListener("click", () => appendNumber(6));
fiveButton.addEventListener("click", () => appendNumber(5));
fourButton.addEventListener("click", () => appendNumber(4));
threeButton.addEventListener("click", () => appendNumber(3));
twoButton.addEventListener("click", () => appendNumber(2));
oneButton.addEventListener("click", () => appendNumber(1));
zeroButton.addEventListener("click", () => appendNumber(0));

dotButton.addEventListener("click", () => alert("Função ainda não implementada!"));

plusButton.addEventListener("click", () => {
    currentOperation = "+";
    emptyOnNextClick = true;
    memoryNumber = Number(display.innerText);
});

minusButton.addEventListener("click", () => {
    currentOperation = "-";
    emptyOnNextClick = true;
    memoryNumber = Number(display.innerText);
});

divideButton.addEventListener("click", () => {
    currentOperation = "/";
    emptyOnNextClick = true;
    memoryNumber = Number(display.innerText);
});

multiplyButton.addEventListener("click", () => {
    currentOperation = "*";
    emptyOnNextClick = true;
    memoryNumber = Number(display.innerText);
});

equalButton.addEventListener("click", () => {
    operate(memoryNumber, displayNumber, currentOperation)
});

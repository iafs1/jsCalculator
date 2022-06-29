let display = document.querySelector(".calculator-display");
let storedValue;
let currentValue;
let currentOperation = "none";
let emptyFlag = false;

let clearButton = document.querySelector(".clearButton");
let colorSwitcherButton = document.querySelector(".colorSwitcherButton");
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
let pointButton = document.querySelector(".pointButton");
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

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
}

clearButton.addEventListener("click", () => {
    display.innerText = "";
    storedValue = 0;
    currentValue = 0;
    currentOperation = "none";
    emptyFlag = false
});

// colorSwitcherButton
// offButton
// onButton

nineButton.addEventListener("click", () => {
    if (display.innerText.length >= 9) {
        return;
    }
    if (emptyFlag) {
         emptyFlag = false;
         display.innerText = 9;
    } else {
         display.innerText += 9;
    }
});

eightButton.addEventListener("click", () => {
    if (display.innerText.length >= 9) {
        return;
    }
    if (emptyFlag) {
         emptyFlag = false;
         display.innerText = 8;
    } else {
         display.innerText += 8;
    }
});

sevenButton.addEventListener("click", () => {
    if (display.innerText.length >= 9) {
        return;
    }
    if (emptyFlag) {
         emptyFlag = false;
         display.innerText = 7;
    } else {
         display.innerText += 7;
    }
});

sixButton.addEventListener("click", () => {
    if (display.innerText.length >= 9) {
        return;
    }
    if (emptyFlag) {
         emptyFlag = false;
         display.innerText = 6;
    } else {
         display.innerText += 6;
    }
});

fiveButton.addEventListener("click", () => {
    if (display.innerText.length >= 9) {
        return;
    }
    if (emptyFlag) {
         emptyFlag = false;
         display.innerText = 5;
    } else {
         display.innerText += 5;
    }
});

fourButton.addEventListener("click", () => {
    if (display.innerText.length >= 9) {
        return;
    }
    if (emptyFlag) {
         emptyFlag = false;
         display.innerText = 4;
    } else {
         display.innerText += 4;
    }
});

threeButton.addEventListener("click", () => {
    if (display.innerText.length >= 9) {
        return;
    }
    if (emptyFlag) {
         emptyFlag = false;
         display.innerText = 3;
    } else {
         display.innerText += 3;
    }
});

twoButton.addEventListener("click", () => {
    if (display.innerText.length >= 9) {
        return;
    }
    if (emptyFlag) {
         emptyFlag = false;
         display.innerText = 2;
    } else {
         display.innerText += 2;
    }
});

oneButton.addEventListener("click", () => {
    if (display.innerText.length >= 9) {
        return;
    }
    if (emptyFlag) {
         emptyFlag = false;
         display.innerText = 1;
    } else {
         display.innerText += 1;
    }
});

zeroButton.addEventListener("click", () => {
    if (display.innerText.length >= 9) {
        return;
    }
    if (emptyFlag) {
         emptyFlag = false;
         display.innerText = 0;
    } else {
         display.innerText += 0;
    }
});

plusButton.addEventListener("click", () => {
    currentOperation = "+";
    emptyFlag = true;
    storedValue = parseInt(display.innerText);
});

equalButton.addEventListener("click", () => {
    currentValue = parseInt(display.innerText);
    switch (currentOperation) {
        case "+":
            storedValue = add(storedValue, currentValue);
            display.innerText = storedValue;
            break;
        case "-":
            storedValue = add(storedValue, currentValue);
            display.innerText = storedValue;
            break;
        case "*":
            storedValue = add(storedValue, currentValue);
            display.innerText = storedValue;
            break;
        case "/":
            storedValue = add(storedValue, currentValue);
            display.innerText = storedValue;
            break;
    }
});
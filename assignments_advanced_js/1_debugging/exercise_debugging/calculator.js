let displayValue = '';
let firstOperand = null;
let operator = null;
let awaitingSecondOperand = false;

// Append a number to the display
function appendNumber(number) {
    if (awaitingSecondOperand) {
        displayValue = number.toString();
        awaitingSecondOperand = false;
    } else {
        displayValue += number.toString();
    }
    updateDisplay();
}

// Set the operator and prepare for the second operand
function setOperator(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
    } else if (operator) {
        calculateResult();
        firstOperand = parseFloat(displayValue);
    }
    operator = op;
    awaitingSecondOperand = true;
}

// Calculate the result based on the operator
function calculateResult() {
    let secondOperand = parseFloat(displayValue);
    let result = 0;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand / secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                result = 'Error'; // Division by zero check
            } else {
                result = firstOperand / secondOperand;
            }
            break;
        default:
            result = secondOperand;
    }

    displayValue = result.toString();
    firstOperand = result;
    operator = null;
    awaitingSecondOperand = false;
    updateDisplay();
}

// Clear the display
function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    operator = null;
    awaitingSecondOperand = false;
    updateDisplay();
}

// Update the calculator display
function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}

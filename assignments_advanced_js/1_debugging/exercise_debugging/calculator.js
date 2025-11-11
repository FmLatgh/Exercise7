let displayValue = '0';
let firstOperand = null;
let operator = null;
let awaitingSecondOperand = false;

// Append a number to the display
function appendNumber(number) {
    //check what number is displayed
    let displayedValue = document.getElementById('display') ? document.getElementById('display').value : displayValue;
    // if display shows error, reset first
    if (displayedValue === "Err" || displayedValue === "Error") {
        clearDisplay();
    }
    if (awaitingSecondOperand) {
        displayValue = number.toString();
        awaitingSecondOperand = false;
    } else {
        // replace leading zero unless adding a decimal point (not implemented tho)
        if (displayValue === '0') {
            displayValue = number.toString();
        } else {
            displayValue += number.toString();
        }
    }
    updateDisplay();
}

// Set the operator and prepare for the second operand
function setOperator(op) {
    // cuando el operador ya está seteado
    if (operator && awaitingSecondOperand) {
        operator = op;
        return;
    }

    const inputValue = parseFloat(displayValue);
    if (firstOperand === null) {
        firstOperand = isNaN(inputValue) ? 0 : inputValue;
    } else if (operator) {
        // perform calculation with existing operator before assigning new operator
        calculateResult();
        firstOperand = parseFloat(displayValue);
    }

    operator = op;
    awaitingSecondOperand = true;
}

// Calculate the result based on the operator
function calculateResult() {
    const secondOperand = parseFloat(displayValue);
    let result = 0;

    if (firstOperand === null || operator === null) {
        // nothing to compute
        return;
    }

    if (isNaN(secondOperand)) {
        // returnn here if second operand is not a number
        return;
    }

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                // Div by 0 is now handled by reset + err
                displayValue = 'Err';
                firstOperand = null;
                operator = null;
                awaitingSecondOperand = false;
                updateDisplay();
                return;
            } else {
                result = firstOperand / secondOperand;
            }
            break;
        default:
            result = secondOperand;
    }

    displayValue = result.toString();
    firstOperand = result; // Chains maths
    operator = null;
    awaitingSecondOperand = false;
    updateDisplay();
}

// Clear the display
function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    operator = null;
    awaitingSecondOperand = false;
    updateDisplay();
}

// Update the calculator display
function updateDisplay() {
    const display = document.getElementById('display');
    if (!display) return;
    display.value = displayValue;
}

function causeError() {
    // set error state and show "Err"
    clearDisplay();
    displayValue = "Err";
    awaitingSecondOperand = false;
    updateDisplay();
}

// sadly we don't have native onLoad func in js files, so this is how we do it now
updateDisplay();

/*
errors:
- NaN was not properly handled in calculations (usually when you tried to compute just an operator or something)
- /0 did not reset the calculator state properly (read about the Err thing)
- Error state was not managed and no implementation to reset the state existed either
- It was impossible to restart the calculator after Err
- Leading zeros were not handled when appending numbers
- Operator changes before 2nd operand input were not managed
- The CSS was downright horrible
 */
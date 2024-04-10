let selectedOperation = "";

function setOperation(operation) {
    selectedOperation = operation;
    document.querySelector('.dropdown-toggle').innerText = operation.charAt(0).toUpperCase() + operation.slice(1); // Change the dropdown button text to the selected operation
}

function calculate() {

    let num1 = parseFloat(document.getElementById('input1').value);
    let num2 = parseFloat(document.getElementById('input2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers.');
        return;
    }

    let result;
    switch(selectedOperation) {
        case 'addition':
            result = num1 + num2;
            break;
        case 'subtraction':
            result = num1 - num2;
            break;
        case 'multiplication':
            result = num1 * num2;
            break;
        case 'division':
            if (num2 === 0) {
                alert('Cannot divide by zero.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Please select an operation.');
            return;
    }

    alert('Result: ' + result);
}

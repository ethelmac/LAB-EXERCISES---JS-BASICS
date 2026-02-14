// Selecting elements from the DOM
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const displaySum = document.getElementById("sum");
const calcBtn = document.getElementById("calcBtn");
const clearBtn = document.getElementById("clearBtn");

// Function to handle the calculation
function performCalculation() {
    const val1 = parseFloat(num1Input.value);
    const val2 = parseFloat(num2Input.value);

    // Check if both inputs have numbers (isNaN checks if it's "Not a Number")
    if (!isNaN(val1) && !isNaN(val2)) {
        const total = val1 + val2;
        displaySum.textContent = total;
    } else {
        alert("Please enter valid numbers in both fields.");
    }
}

// Function to reset the UI
function resetForm() {
    num1Input.value = "";
    num2Input.value = "";
    displaySum.textContent = "0";
}

// Attach listeners to buttons
calcBtn.addEventListener("click", performCalculation);
clearBtn.addEventListener("click", resetForm);
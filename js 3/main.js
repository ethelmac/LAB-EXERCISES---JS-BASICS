// Reference our UI elements
const displayArea = document.getElementById("elements");
const sumLabel = document.getElementById("sum");

// Initialize data
let numbers = [23, 55, 10, 90, 18]; // You can also initialize with values directly
let total = 0;

// Use forEach to calculate the sum
// This "visits" every item in the array one by one
numbers.forEach((num) => {
    total += num;
});

// Update the HTML
// .join(", ") creates a string separated by commas
displayArea.textContent = numbers.join(", ");
sumLabel.textContent = total;

// Log the array to the console for debugging
console.log("Array Data:", numbers);
console.log("Total Sum:", total);
// Grab the elements
const inputOne = document.getElementById("str1");
const inputTwo = document.getElementById("str2");
const output = document.getElementById("combinedText");
const joinBtn = document.getElementById("joinBtn");
const resetBtn = document.getElementById("resetBtn");

// Logic to join the strings
function handleJoin() {
    const first = inputOne.value.trim();
    const second = inputTwo.value.trim();

    if (first === "" && second === "") {
        output.textContent = "Nothing to join!";
        return;
    }

    // Using Template Literals (Modern JS)
    output.textContent = `${first} ${second}`;
}

// Logic to clear everything
function handleReset() {
    inputOne.value = "";
    inputTwo.value = "";
    output.textContent = "";
}

// Event Listeners
joinBtn.addEventListener("click", handleJoin);
resetBtn.addEventListener("click", handleReset);
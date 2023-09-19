// Input string
const input = "Hello, World!";

// Function to reverse the string with a delay
function reverseStringWithDelay() {
  setTimeout(() => {
    const reversedString = input.split("").reverse().join("");
    console.log("Reversed String:", reversedString);
  }, 2000);
}

// Call the function
reverseStringWithDelay();

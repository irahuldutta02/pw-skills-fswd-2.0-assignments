// Function to reverse a string
function reverseString(input) {
  return input.split("").reverse().join("");
}

const originalString = "Hello, world!";
const reversedString = reverseString(originalString);
console.log(reversedString);

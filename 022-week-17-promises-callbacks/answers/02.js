// Function to manipulate a string and return a callback function
function manipulateString(inputString) {
  const manipulatedString = inputString.toUpperCase();

  // Callback function to log the manipulated string
  function logString() {
    console.log(`The manipulated string is: ${manipulatedString}`);
  }

  return logString;
}

// Example usage
const logStringCallback = manipulateString("hello, world!");
logStringCallback();

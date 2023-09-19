// Function to generate a random number with a delay
function generateRandomNumberWithDelay() {
  let remainingTime = 3;
  const intervalId = setInterval(() => {
    console.log(`Time remaining: ${remainingTime} seconds`);
    remainingTime--;

    if (remainingTime === 0) {
      clearInterval(intervalId);
      const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
      console.log("Random Number:", randomNumber);
    }
  }, 1000);
}

// Call the function
generateRandomNumberWithDelay();

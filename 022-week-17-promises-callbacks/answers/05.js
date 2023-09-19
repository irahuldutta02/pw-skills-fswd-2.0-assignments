// Function that returns a promise with a greeting
function greetWithPromise(name) {
  return new Promise((resolve, reject) => {
    if (name) {
      resolve(`Hello, ${name}!`);
    } else {
      reject("Name is required.");
    }
  });
}

// Example usage
const name = "Mithun";

greetWithPromise(name)
  .then((greeting) => {
    console.log(greeting);
  })
  .catch((error) => {
    console.error(error);
  });

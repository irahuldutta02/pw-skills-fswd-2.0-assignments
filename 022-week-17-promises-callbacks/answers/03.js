// Function to calculate age in days and return a callback function
function ageInDays(person, callback) {
  const fullName = `${person.firstName} ${person.lastName}`;
  const ageInDays = person.age * 365;

  // Callback function to log the person's full name and age in days
  function logResult() {
    console.log(
      `The person's full name is ${fullName} and their age in days is ${ageInDays}.`
    );
  }

  return logResult;
}

// Example usage
const person = {
  firstName: "Mithun",
  lastName: "S",
  age: 20,
};
const logResultCallback = ageInDays(person);
logResultCallback();

// Create an object representing a car

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};

// Function to display all properties of the car

function displayCarProperties(car) {
  for (const property in car) {
    console.log(`${property}: ${car[property]}`);
  }
}

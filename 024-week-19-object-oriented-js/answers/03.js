class Temperature {
  constructor() {
    this._celsius = 0;
    this._fahrenheit = 32;
  }

  // Getter for Celsius temperature
  get getCelsius() {
    return this._celsius;
  }

  // Getter for Fahrenheit temperature
  get getFahrenheit() {
    return this._fahrenheit;
  }

  // Setter for Celsius temperature
  set setCelsius(celsius) {
    if (typeof celsius === "number") {
      this._celsius = celsius;
      this._fahrenheit = (celsius * 9) / 5 + 32;
    } else {
      console.error("Temperature must be a numeric value.");
    }
  }

  // Setter for Fahrenheit temperature
  set setFahrenheit(fahrenheit) {
    if (typeof fahrenheit === "number") {
      this._fahrenheit = fahrenheit;
      this._celsius = ((fahrenheit - 32) * 5) / 9;
    } else {
      console.error("Temperature must be a numeric value.");
    }
  }
}

const temperature = new Temperature();

console.log(`Initial Celsius: ${temperature.getCelsius}°C`); // Initial Celsius: 0°C
console.log(`Initial Fahrenheit: ${temperature.getFahrenheit}°F`); // Initial Fahrenheit: 32°F

temperature.setCelsius = 25;
console.log(`Celsius: ${temperature.getCelsius}°C`); // Celsius: 25°C
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`); // Fahrenheit: 77°F

temperature.setFahrenheit = 68;
console.log(`Celsius: ${temperature.getCelsius}°C`); // Celsius: 20°C
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`); // Fahrenheit: 68°F

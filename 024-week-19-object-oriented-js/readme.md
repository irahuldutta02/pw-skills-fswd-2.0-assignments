# Answers

### 01.

`Input : `

```javascript
class BankAccount {
  constructor(accountNumber, accountHolderName, balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error(
        "Invalid deposit amount. Please enter a positive amount."
      );
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error(
        "Invalid withdrawal amount. Please enter a positive amount."
      );
    }
    if (amount > this.balance) {
      throw new Error("Insufficient funds for withdrawal.");
    }
    this.balance -= amount;
  }

  checkBalance() {
    return this.balance;
  }
}

// Testcase
const myAccount = new BankAccount("1234567890", "Mithun S", 1000);

try {
  myAccount.deposit(-50);
} catch (error) {
  console.log(error.message); // Invalid deposit amount. Please enter a positive amount.
}

try {
  myAccount.withdraw(1500);
} catch (error) {
  console.log(error.message); // Insufficient funds for withdrawal.
}

myAccount.deposit(500); // Deposited Rs.500. New balance: Rs.1500
myAccount.withdraw(200); // Withdrawn Rs.200. New balance: Rs.1300
console.log(myAccount.checkBalance()); // Account balance for Mithun S: Rs.1300
```

`Output : `

```
Invalid deposit amount. Please enter a positive amount.
Insufficient funds for withdrawal.
1300
```

### 02.

`Input : `

```javascript
class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.enrolledCourses = [];
  }

  enrollInCourse(course) {
    this.enrolledCourses.push(course);
  }

  showEnrolledCourses() {
    const enrolledCourses = this.enrolledCourses.join(", ");
    return `${this.name}'s enrolled courses: ${enrolledCourses}`;
  }
}

class Admission {
  constructor() {
    this.students = [];
  }

  enrollStudent(student) {
    this.students.push(student);
  }

  assignCourse(student, course) {
    student.enrollInCourse(course);
  }

  showEnrolledStudents() {
    const enrolledStudents = this.students.map(
      (student) => `${student.name} (${student.email})`
    );
    return `Enrolled students:\n${enrolledStudents.join("\n")}`;
  }
}

const admissionOffice = new Admission();

const student1 = new Student("Mithun", "mithun@pw.live");
const student2 = new Student("Farman", "farman@pw.live");

admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);

admissionOffice.assignCourse(student1, "Full Stack Web Development");
admissionOffice.assignCourse(student2, "Data Science Masters");

console.log(student1.showEnrolledCourses()); // Mithun's enrolled courses: Full Stack Web Development
console.log(student2.showEnrolledCourses()); // Farman's enrolled courses: Data Science Masters

console.log(admissionOffice.showEnrolledStudents());
```

`Output : `

```
Mithun's enrolled courses: Full Stack Web Development
Farman's enrolled courses: Data Science Masters
Enrolled students:
Mithun (mithun@pw.live)
Farman (farman@pw.live)
```

### 03.

`Input : `

```javascript
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
```

`Output : `

```
Initial Celsius: 0°C
Initial Fahrenheit: 32°F
Celsius: 25°C
Fahrenheit: 77°F
Celsius: 20°C
Fahrenheit: 68°F
```

### 04.

`Input : `

```javascript
class Shape {
  constructor() {
    // This is the base class with default implementations.
  }

  // Default method for calculating area (to be overridden by subclasses)
  calculateArea() {
    return "Area calculation not implemented for this shape";
  }

  // Default method for calculating perimeter (to be overridden by subclasses)
  calculatePerimeter() {
    return "Perimeter calculation not implemented for this shape";
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  // Override the calculateArea method for Circle
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  // Override the calculatePerimeter method for Circle
  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  // Override the calculateArea method for Rectangle
  calculateArea() {
    return this.width * this.height;
  }

  // Override the calculatePerimeter method for Rectangle
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Triangle extends Shape {
  constructor(side1, side2, side3, height1, height2) {
    super();
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.height1 = height1;
    this.height2 = height2;
  }

  // Override the calculateArea method for Triangle
  calculateArea() {
    return (this.side1 * this.height1) / 2;
  }

  // Override the calculatePerimeter method for Triangle
  calculatePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

const circle = new Circle(5);
console.log(
  `Circle - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`
);

const rectangle = new Rectangle(4, 6);
console.log(
  `Rectangle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`
);

const triangle = new Triangle(8, 6, 5, 7, 10);
console.log(
  `Triangle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`
);
```

`Output : `

```
Circle - Area: 78.53981633974483, Perimeter: 31.41592653589793
Rectangle - Area: 24, Perimeter: 20
Triangle - Area: 28, Perimeter: 19
```

### 05.

`Input : `

```javascript
// Product constructor function
function Product(name, category, price, stock) {
  this.name = name;
  this.category = category;
  this.price = price;
  this.stock = stock;
}

// Inventory constructor function
function Inventory() {
  this.inventoryList = [];
}

// Add a valid Product object to the inventory
Inventory.prototype.addProduct = function (product) {
  if (product instanceof Product) {
    this.inventoryList.push(product);
    console.log(`Added ${product.name} to the inventory.`);
  } else {
    console.log("Invalid product. Please provide a valid Product object.");
  }
};

// Remove a product from the inventory by name
Inventory.prototype.deleteProduct = function (productName) {
  const index = this.inventoryList.findIndex(
    (product) => product.name === productName
  );
  if (index !== -1) {
    const deletedProduct = this.inventoryList.splice(index, 1)[0];
    console.log(`Deleted ${deletedProduct.name} from the inventory.`);
  } else {
    console.log(
      `${productName} not found in the inventory. Deletion unsuccessful.`
    );
  }
};

const inventory = new Inventory();
const product1 = new Product("Laptop", "Electronics", 899, 10);
const product2 = new Product("Book", "Books", 20, 50);

inventory.addProduct(product1); // Added Laptop to the inventory.
inventory.addProduct(product2); // Added Book to the inventory.

inventory.deleteProduct("Laptop"); // Deleted Laptop from the inventory.
```

`Output : `

```
Added Laptop to the inventory.
Added Book to the inventory.
Deleted Laptop from the inventory.
```

class Shape {
    constructor() {
      // This is the base class with default implementations.
    }
  
    // Default method for calculating area (to be overridden by subclasses)
    calculateArea() {
      return 'Area calculation not implemented for this shape';
    }
  
    // Default method for calculating perimeter (to be overridden by subclasses)
    calculatePerimeter() {
      return 'Perimeter calculation not implemented for this shape';
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
  console.log(`Circle - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`);
  
  const rectangle = new Rectangle(4, 6);
  console.log(`Rectangle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`);
  
  const triangle = new Triangle(8, 6, 5, 7, 10);
  console.log(`Triangle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`);
  
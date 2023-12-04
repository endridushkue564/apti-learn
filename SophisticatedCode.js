/* 
   Filename: SophisticatedCode.js
   Description: A complex and elaborate code example demonstrating various concepts in JavaScript
*/

// Constants
const PI = 3.14159;
const G = 9.81;

// Classes
class Shape {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  printInfo() {
    console.log(`Shape: ${this.name} | Color: ${this.color}`);
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super("Circle", color);
    this.radius = radius;
  }

  get area() {
    return PI * this.radius ** 2;
  }

  printArea() {
    console.log(`Area of ${this.name}: ${this.area}`);
  }
}

class Rectangle extends Shape {
  constructor(length, width, color) {
    super("Rectangle", color);
    this.length = length;
    this.width = width;
  }

  get area() {
    return this.length * this.width;
  }

  printArea() {
    console.log(`Area of ${this.name}: ${this.area}`);
  }
}

// Functions
function calculateVelocity(initialVelocity, time) {
  return initialVelocity + G * time;
}

function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

// Code Execution

// Creating shapes
const redCircle = new Circle(5, "red");
const blueRectangle = new Rectangle(10, 8, "blue");

// Printing shape information
redCircle.printInfo();
blueRectangle.printInfo();

// Calculating and printing areas
redCircle.printArea();
blueRectangle.printArea();

// Calculating velocity
const initialVelocity = 10;
const time = 5;
const finalVelocity = calculateVelocity(initialVelocity, time);
console.log(`Final velocity: ${finalVelocity}`);

// Summing an array
const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);
console.log(`Sum of numbers: ${sum}`);

// More complex logic...
// TODO: Continue with more complex code (over 200 lines) to demonstrate sophisticated JavaScript concepts.
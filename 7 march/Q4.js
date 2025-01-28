class Shape {
    draw() {
      console.log("Drawing a shape...");
    }
  }
  
  class Circle extends Shape {
    draw() {
      console.log("Drawing a circle...");
    }
  }
  
  class Rectangle extends Shape {
    draw() {
      console.log("Drawing a rectangle...");
    }
  }
  
  // Example Usage
  const shapes = [new Shape(), new Circle(), new Rectangle()];
  shapes.forEach((shape) => shape.draw());
  
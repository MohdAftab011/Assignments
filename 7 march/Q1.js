function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.sayHello = function () {
      return `Hello, my name is ${this.name}, and I am ${this.age} years old.`;
    };
  }
  
  // Example Usage
  const person1 = new Person("Alice", 25);
  console.log(person1.sayHello());
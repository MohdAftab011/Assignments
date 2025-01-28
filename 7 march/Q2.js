function Employee(name, age, designation) {
    Person.call(this, name, age); // Inherit properties from Person
    this.designation = designation;
  
    this.getDetails = function () {
      return `Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`;
    };
  }
  
  // Example Usage
  const employee1 = new Employee("Bob", 30, "Software Engineer");
  console.log(employee1.sayHello());
  console.log(employee1.getDetails());
  
// Part 3a: Prevent extensions on student object
const student = { name: "Alice" };
Object.preventExtensions(student);

// Part 3b: Check extensibility
const extensibleStatus = Object.isExtensible(student);

// Part 3c: Create teacher object
const teacher = { subject: "Math" };

// Part 3d: Seal teacher object
Object.seal(teacher);

// Part 3e: Check if teacher is sealed
const sealedStatus = Object.isSealed(teacher);

// Part 3f: Print statuses
console.log({ extensibleStatus, sealedStatus });
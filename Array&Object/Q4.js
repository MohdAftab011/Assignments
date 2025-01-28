const students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" }
];

// a. Add a Student
function addStudent(student) {
    students.push(student);
}

// b. Update Student Information
function updateStudent(id, updatedInfo) {
    const student = students.find(s => s.id === id);
    if (student) Object.assign(student, updatedInfo);
}

// c. Delete a Student
function deleteStudent(id) {
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) students.splice(index, 1);
}

// d. List All Students
function listAllStudents() {
    console.log("Student List:");
    students.forEach(student => {
        console.log(
            `ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, ` +
            `Age: ${student.age}, Grade: ${student.grade}`
        );
    });
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
}

// f. Calculate Average Age
function calculateAverageAge() {
    if (students.length === 0) return 0;
    return students.reduce((sum, student) => sum + student.age, 0) / students.length;
}

// ------ Demonstration ------
// Add a new student
addStudent({ id: 4, firstName: "Emily", lastName: "Davis", age: 21, grade: "C" });

// Update Jane's grade to 'A'
updateStudent(2, { grade: "A" });

// Delete Bob
deleteStudent(3);

// List all students
listAllStudents();

// Find students with grade 'A'
console.log("\nStudents with grade A:", findStudentsByGrade("A"));

// Calculate average age
console.log("Average age:", calculateAverageAge().toFixed(1));
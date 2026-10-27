// Run: node marks.js
const students = [
  { name: 'Amit', marks: 82 },
  { name: 'Riya', marks: 68 },
  { name: 'Sana', marks: 91 },
  { name: 'Karan', marks: 75 }
];

const topStudents = list => list.filter(s => s.marks >= 75);   // arrow function + filter

const result = topStudents(students);
console.log('Students with 75 or above:', result);
console.log('Names:', result.map(s => s.name));                // map

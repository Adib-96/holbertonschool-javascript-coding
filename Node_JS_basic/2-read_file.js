const fs = require('fs');
const csvParser = require('csv-parser');

const result = [];

function countStudents(path) {
  fs.createReadStream(path, { encoding: 'utf-8' })
    .pipe(csvParser())
    .on('data', (data) => {
      result.push(data);
    })
    .on('end', () => {
      console.log(`Number of students: ${result.length}`);

      const sweStudents = result.filter((student) => student.field !== 'CS');
      const csStudents = result.filter((student) => student.field === 'CS');
      const listOfCsStudents = csStudents.map((student) => student.firstname);
      const listOfSweStudents = sweStudents.map((student) => student.firstname);

      console.log(`Number of students in CS: ${csStudents.length}. List: ${listOfCsStudents.join(', ')} `);
      console.log(`Number of students in CS: ${sweStudents.length}. List: ${listOfSweStudents.join(', ')} `);
    })
    .on('error', () => {
      console.log('Cannot load the database');
    });
}

module.exports = countStudents;

const fs = require('node:fs/promises');

async function countStudents(path) {
  let data;
  try {
    data = await fs.readFile(path, { encoding: 'utf-8' });
  } catch (err) {
    console.log('Cannot load the database');
  }
  const content = data.split('\n');
  const tableOfUsers = content.map((row) => row.split('\n')).slice(1, content.length);
  const STUDENT_NUMBER = content.slice(1, content.length).length;
  const magic = [];
  for (let i = 0; i < STUDENT_NUMBER; i += 1) {
    magic.push(tableOfUsers[i][0].split(','));
  }
  const csStudent = magic.filter((user) => user[3] === 'CS');
  const sweStudent = magic.filter((user) => user[3] === 'SWE');

  const cs = [];
  csStudent.reduce((acc, curr) => cs.push(curr[0]), cs);

  const swe = [];
  sweStudent.reduce((acc, curr) => swe.push(curr[0]), swe);
  console.log(`Number of students : ${STUDENT_NUMBER}`);
  console.log(`Number of students in CS: ${csStudent.length} List: ${cs.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudent.length} List: ${swe.join(', ')}`);
}

countStudents('./database.csv')
module.exports = countStudents;

const FS = require('fs');

function ReadStudents(FilePath) {
    FS.readFile(FilePath, 'utf-8', (err, data) => {
        if (err) throw err;
        const ES = JSON.parse(data);
        console.log('\nLista de estudiantes:', ES);
    });
}

module.exports = ReadStudents;
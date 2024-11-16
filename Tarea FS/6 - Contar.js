const FS = require('fs');

function CountStudents(FilePath) {
    FS.readFile(FilePath, 'utf-8', (err, data) => {
        if (err) throw err;
        const ES = JSON.parse(data);
        console.log(`\nNúmero total de estudiantes: ${ES.length}`);
    });
}

module.exports = CountStudents;
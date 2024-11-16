const FS = require('fs');

function DeleteStudent(FilePath, id) {
    FS.readFile(FilePath, 'utf-8', (err, data) => {
        if (err) throw err;
        let Es = JSON.parse(data);
        Es = Es.filter(p => p.id !== id);

        FS.writeFile(FilePath, JSON.stringify(Es, null, 2), (err) => {
            if (err) throw err;
            console.log('\nEstudiante eliminado.');
        });
    });
}

module.exports = DeleteStudent;
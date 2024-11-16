const FS = require('fs');

function ModifyStudent(FilePath, id, NewName=undefined, NewAge=undefined, NewCareer=undefined) {
    FS.readFile(FilePath, 'utf-8', (err, data) => {
        if (err) throw err;
        const ES = JSON.parse(data);

        const E = ES.find(p => p.id === id);

        if (E) {
            if (NewName !== undefined){
                E.nombre = NewName;
            }
            if (NewAge !== undefined){
                E.edad = NewAge;
            }
            if (NewCareer !== undefined){
                E.carrera = NewCareer;
            }
            FS.writeFile(FilePath, JSON.stringify(ES, null, 2), (err) => {
                if (err) throw err;
                console.log('\nEstudiante modificado.');
            });
        } else {
            console.log('\nEstudiante no encontrado.');
        }
    });
}

module.exports = ModifyStudent;

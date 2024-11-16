const FS = require('fs');

function AddStudent(FilePath, Name, Age, Career) {
    FS.readFile(FilePath, 'utf-8', (err, data) => {
        if (err) throw err;

        let Es = JSON.parse(data);
        
        // Generar un nuevo ID automáticamente, esto para evitar que se dupliquen
        const EIDS = Es.map(student => student.id);
        const NEWID = EIDS.length > 0 ? Math.max(...EIDS) + 1 : 1;

        // Crear el nuevo estudiante
        const NEWSTUDENT = {
            id: NEWID,
            nombre: Name,
            edad: parseInt(Age),
            carrera: Career
        };

        // Agregar el nuevo estudiante
        Es.push(NEWSTUDENT);

        // Guardar los cambios en el archivo
        FS.writeFile(FilePath, JSON.stringify(Es, null, 2), (err) => {
            if (err) throw err;
            console.log('\nNuevo estudiante agregado:', NEWSTUDENT);
        });
    });
}

module.exports = AddStudent;
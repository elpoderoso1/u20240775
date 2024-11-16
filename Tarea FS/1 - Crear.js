const FS = require('fs');

function CreateJSON(FilePath, Initial_Values){
    FS.writeFile(FilePath, JSON.stringify(Initial_Values, null, 2), (err) => {
        console.log('\nArchivo JSON creado con los productos iniciales.');
    });
}

module.exports = CreateJSON;
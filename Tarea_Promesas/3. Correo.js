const READLINE = require('readline');
const RL = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
});

const SU_CORREO = [
    "@gmail.com",
    "@yahoo.com",
    "@univo.edu.sv"
];

function EnviarCorreo(email) {
    return new Promise((resolve, reject) => {
        // Simular un tiempo de envio de 2 segundos
        const EMAIL = email.trim()
        setTimeout(() => {
            if (EMAIL !== '') {
                // Verificar si el correo tiene uno de los sufijos validos para eso se usa endsWith
                const SU = SU_CORREO.some(sufijo => EMAIL.endsWith(sufijo));
                if (SU) {
                    resolve(`Correo enviado a ${EMAIL}.`);
                } else {
                    reject(`Dirección de correo erronea. \n// Debe terminar con uno de los siguientes sufijos. \n${SU_CORREO.join(', ')}`);
                }
            } else {
                reject('Dirección de correo no proporcionada.');
            }
        }, 1000*2); // 2000 milisegundos = 2 segundos
    });
}

RL.question('¿Cuál es la dirección de correo electrónico?\n', (email) => {
    EnviarCorreo(email)
        .then(msg => {
            console.log(msg);
            RL.close();
        })
        .catch(error => {
            console.error(`Error: ${error}`);
            RL.close();
        });
});

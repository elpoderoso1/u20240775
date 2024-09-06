const READLINE = require('readline');
const RL = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
});

function VerificarStock(CAN_SOL) {
    return new Promise((resolve, reject) => {
        const STOCK_MAXIMO = 100;
        if (CAN_SOL <= STOCK_MAXIMO) {
            resolve(`Stock suficiente para ${CAN_SOL}.`);
        } else {
            reject('Stock insuficiente.');
        }
    });
}

RL.question('¿Cuántas unidades desea solicitar?\n', (can_pro) => {
    const CAN = parseInt(can_pro);
    if (can_pro.trim() == '') {
        console.error('Error: Cantidad de producto no proporcionada.');
        RL.close();
    } else {
        VerificarStock(CAN)
        .then(msg => {
            console.log(msg);
            RL.close();
        })
        .catch(error => {
            console.error(`Error: ${error}`);
            RL.close();
        });
    }
});
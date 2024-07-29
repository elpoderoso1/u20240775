readline = require('readline')

rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

rl.question('Ingrese la cadena de texto.\n', (msg) => {
    const MSGUPPER = msg.toUpperCase()
    console.log(`La cadena de texto en mayúsculas es: ${MSGUPPER}`)
    rl.close()
})

readline = require('readline')

rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

rl.question('Ingrese una cadena de texto.\n', (msg) => {
    const MSGUPPER = msg.toUpperCase()
    console.log(`Su cadena de texto en mayúsculas es: ${MSGUPPER}`)
    rl.close()
})

readline = require('readline')

rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

rl.question('Ingrese la cadena de texto.\n', (msg) => {
    const MSGSUB = msg.substring(0, 10)
    console.log(`La subcadena es: ${MSGSUB}`)
    rl.close()
})

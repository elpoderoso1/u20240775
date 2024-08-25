readline = require('readline')

rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

rl.question('Escriba una cadena de texto.\n', (msg) => {
    const MSGREPLACE = msg.replace('si', 'no')
    console.log(`Su cadena de texto reemplazando si por no es: ${MSGREPLACE}`)
    rl.close()
})

readline = require('readline')

rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

rl.question('Ingrese una cadena de texto.\n', (msg) => {
    const CADENAINVERTIDA = msg.split("").reverse().join("")
    console.log(`Su cadena de texto invertida es: ${CADENAINVERTIDA}`)
    rl.close()
})
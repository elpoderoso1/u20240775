readline = require('readline')

rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

rl.question('Escriba una frase.\n', (msg) => {
    const FRASE = msg.split(" ")
    const FRASECHARS = FRASE.length
    console.log(`La cantidad de palabras en su frase son: ${FRASECHARS}`)
    rl.close()
})

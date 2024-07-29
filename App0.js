readline = require('readline')

rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

rl.question('¿Cuál es tu nombre?\n', (nombre) => {
    console.log(`Hola, ${nombre}!`)
    rl.close()
})

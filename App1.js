readline = require('readline')

rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

rl.question('¿Cuál es tu nombre?\n', (nombre) => {
    rl.question('¿Cuál es tu apellido? ', (apellido) => {
        console.log(`Hola, ${nombre} ${apellido}!`)
        rl.close()
    })
})

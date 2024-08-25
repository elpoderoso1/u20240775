readline = require('readline')

rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

rl.question('¿Cuál es su nombre?\n', (nombre) => {
    rl.question('¿Cuál es su apellido?\n', (apellido) => {
        console.log(`Hola, ${nombre} ${apellido}!`)
        rl.close()
    })
})

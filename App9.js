readline = require('readline')

rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

rl.question('Ingrese el texto.\n', (msg) => {
    const VOCALES = 'aeiouAEIOU'
    let contador = 0
    for (let i = 0; i < msg.length; i++) {
        if (VOCALES.includes(msg[i])) {
            contador++
        }
    }
    console.log(`El número de vocales en su cadena de texto son: ${contador}`)
    rl.close()
})
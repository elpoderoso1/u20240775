readline = require('readline')

rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

rl.question('Escriba una cadena de texto.\n', (msg) => {
    const CHARCOUNT = msg.length
    console.log(`La cantidad de caracteres en su mensaje son: ${CHARCOUNT}`)
    rl.close()
})

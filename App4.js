readline = require('readline')

rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

rl.question('Escriba la cadena de texto.\n', (msg) => {
    const MSGREPLACE = msg.replace('si', 'no')
    console.log(`La reemplazada es: ${MSGREPLACE}`)
    rl.close()
})

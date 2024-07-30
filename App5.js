readline = require('readline')

rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

rl.question('Ingrese una cadena de texto.\n', (msg) => {
    rl.question('Ingrese la cantidad maxima de letras para su subcadena.\n', (i) => {
        const MSGSUB = msg.substring(0, i)
        console.log(`Su subcadena es: ${MSGSUB}`)
        rl.close()
    })
})

readline = require('readline')

rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

rl.question('Ingrese una cadena de texto.\n', (msg) => {
    const PALABRAS = msg.split(" ")
    for (let i = 0; i < PALABRAS.length; i++) {
        PALABRAS[i] = PALABRAS[i][0].toUpperCase() + PALABRAS[i].substring(1);
    }
    let nuevaCadena = PALABRAS.join(" ");
    console.log(`La cadena de texto con la primera letra capitalizada es: ${nuevaCadena}`)
    rl.close()
})
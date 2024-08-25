readline = require('readline')

rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

rl.question('Escriba una cadena de texto.\n', (msg) => {
    let palabras = msg.split(" ")
    let resultados = []
    for (let palabra of palabras){
        let palabra_invertida = palabra.split("").reverse().join("")
        if (palabra == palabra_invertida){
            resultados.push(`${palabra} es una palabra palíndromo.`)
        }
        else {
            resultados.push(`${palabra} no es una palabra palíndromo.`)
        }
    }
    console.log(resultados.join('\n'))
    rl.close()
})

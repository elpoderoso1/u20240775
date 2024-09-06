const READLINE = require('readline');
const RL = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
});

const DIC = {
    "Musica": 18,
    "Videos": 12,
    "Peliculas": 18,
    "Juegos": 15,
};

function ComprobadorDeEdad(){
    return new Promise((resolve, reject) => {
        RL.question('¿Cuál es su edad?\n', (years) => {
            if (years.trim() !== ''){
                for (const [N, Y] of Object.entries(DIC)) {
                    console.log(`${N}  -  ${Y}`);
                }

                RL.question('¿A qué contenido quiere acceder?\n', (cat) => {
                    const CAT = cat.trim()
                    if (CAT !== ''){
                        const AGE_FIX = parseInt(years);
                        const MIN_AGE = DIC[CAT]; // Minima edad para acceder a la CAT

                        if (CAT in DIC) { // Verificar si la categoria existe
                            const MIN_AGE = DIC[CAT];

                            if (AGE_FIX >= MIN_AGE) {
                                resolve(`¡Edad válida para acceder al contenido, ${CAT}!`);
                            } else {
                                resolve(`¡Edad insuficiente para acceder al contenido, ${CAT}!`);
                            }
                        } else {
                            reject(`¡Contenido desconocido, ${CAT}!`);
                        }

                        RL.close();
                    } else {
                        console.error('Error: Categoria no proporcionada.');
                        RL.close();
                    }
                })
            } else {
                console.error('Error: Edad no proporcionada.');
                RL.close();
            }
        }) 
    })
}

ComprobadorDeEdad()

.then(msg => {
    console.log(msg)
})

.catch(error => {
    console.log(`Error: ${error}`)
})
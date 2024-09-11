const READLINE = require("readline")
const RL = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
})

RL.question("Ingrese el precio del producto.\n$", (Nu) => {
    if (Nu >= 100) {
        des = 0.1;
    } else {
        des = 0.05;
    }
    let precio = (Nu - (Nu*des)).toFixed(2)
    console.log(`El precio final de su producto es: $${precio}`);
    RL.close();
})
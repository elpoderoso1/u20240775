const READLINE = require("readline")
const RL = READLINE.createInterface({
    input: process.stdin,
    output: process.stdout
})

const FUN = () => RL.question("Ingrese su calificacion.\n", (Nu) => {
    const CAL = parseFloat(Nu)
    let COMPLETE = () => {
        console.log(`Su calificacion es: ${Note}`);
        RL.close();
    }

    if (CAL < 0 || CAL > 100){
        console.log("Ingrese una calificacion valida de 0 a 100.")
        FUN();
    } else if (isNaN(CAL)) {
        console.log("Ingrese una calificacion valida en datos numericos.")
        FUN();
    } else if (CAL == 100) {
        Note = 'A+';
        COMPLETE();
    } else if (CAL >= 90){
        Note = 'A';
        COMPLETE();
    } else if (CAL >= 80){
        Note = 'B';
        COMPLETE();
    } else if (CAL >= 70){
        Note = 'C';
        COMPLETE();
    } else if (CAL >= 60){
        Note = 'D';
        COMPLETE();
    } else if (CAL >= 50){
        Note = 'E';
        COMPLETE();
    } else {
        Note = 'F';
        COMPLETE();
    }
})

FUN();

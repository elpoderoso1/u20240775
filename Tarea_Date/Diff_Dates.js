const D_1 = new Date("2019-06-19");
const D_2 = new Date("2024-06-19");

const DIFF_TIME = D_2.getTime() - D_1.getTime();
const DIFF_DAYS = DIFF_TIME / (1000 * 3600 * 24);

console.log(`La diferencia en días de la fecha ${D_1.toLocaleDateString()} y la fecha ${D_2.toLocaleDateString()} es: ${DIFF_DAYS} dias.`)
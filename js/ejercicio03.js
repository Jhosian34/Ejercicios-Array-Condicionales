let numero = parseInt(prompt("Introduce un número entre 1 y 100:"));

if (numero >= 1 && numero <= 100) {

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);

        if (resultado > 1000) {
            console.log("El resultado ha superado 1000. Terminando el bucle.");
            break;
        }
    }
} else {
    console.log("Por favor, introduce un número válido entre 1 y 100.");
}

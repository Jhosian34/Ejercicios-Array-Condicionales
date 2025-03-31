let filas = parseInt(prompt("Introduce el número de filas para el triángulo invertido:"));

for (let i = filas; i >= 1; i--) {
    let linea = "";

    for (let x = 1; x <= i; x++) {
        linea += "*";
    }

    console.log(linea);
}
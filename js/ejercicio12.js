let numeroAleatorio = Math.floor(Math.random() * 10) + 1;


let adivinado = false;

while (!adivinado) {

    let intento = parseInt(prompt("Adivina el número entre 1 y 10:"));

    if (intento === numeroAleatorio) {
        console.log("¡Felicidades! Adivinaste el número.");
        adivinado = true;
    } else if (intento < numeroAleatorio) {
        console.log("El número es mayor. Intenta de nuevo.");
    } else {
        console.log("El número es menor. Intenta de nuevo.");
    }
}
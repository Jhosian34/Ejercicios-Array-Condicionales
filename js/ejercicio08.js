let numero = parseInt(prompt("Introduce un número entero positivo:"));

if (numero < 0) {
    console.log("Por favor, ingresa un número positivo.");
} else {
    let numeroInvertido = 0;

    while (numero > 0) {
        
        let digito = numero % 10;

        numeroInvertido = (numeroInvertido * 10) + digito;

        numero = Math.floor(numero / 10);
    }

    console.log("El número invertido es:", numeroInvertido);
}
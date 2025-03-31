let total = 0;

while (total < 100) {
    
    let numero = parseInt(prompt("Introduce un número entero:"));
    
    total += numero;
    
    console.log("Total acumulado: " + total);
}
console.log("El total acumulado es mayor o igual a 100: " + total);
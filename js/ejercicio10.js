let palabras = prompt("Introduce una lista de palabras separadas por comas:");

let listaPalabras = palabras.split(",");

let palindromas = [];

for (let i = 0; i < listaPalabras.length; i++) {

    let palabra = listaPalabras[i].trim();
    
    let palabraInvertida = palabra.split("").reverse().join("");
    
    if (palabra === palabraInvertida) {
        palindromas.push(palabra);
    }
}

if (palindromas.length > 0) {
    console.log("Las palabras palíndromas son:", palindromas.join(", "));
} else {
    console.log("No se encontraron palabras palíndromas.");
}

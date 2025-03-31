let edades = [18, 25, 14, 32, 16, 40, 10, 15, 21, 7];

for (let i = 0; i < edades.length; i++) {
    let edad = edades[i];

    if (edad >= 18) {
        console.log(edad + ": Mayor de edad");
    } else {
        console.log(edad + ": Menor de edad");
    }
}
// let n = 8;
// let contador = 1;
// // while(contador <= n) {
// //     console.log(contador);
// //     contador++
// // }

// do{
//     console.log("?");
// } while (falso);


// for (let i = 2; i <= 40; i++) {
//     console.log(i++);
// }




let contador = 0;
let num = 2;

for (let contador = 0; contador < 5; num++) {
    let esPrimo = true;

    // Verificar si num es primo
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }

    // Si es primo, imprimir el número y aumentar el contador
    if (esPrimo) {
        console.log(num);
        contador++;
    }
}


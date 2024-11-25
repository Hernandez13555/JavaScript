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



// for (let i = 0; i < 10; i++) {
//     if (i === 4) {
//         continue;
//     }
//     console.log(` Item ${i}`);
// }



// const numeros = [1,2,3,4];

// // let a = numeros[0];
// // let b = numeros[1];
// // let c = numeros[2];
// // let d = numeros[3];

// let [a,b,c,d,e = 25] = numeros;

// console.log(a,b,c,d,e);

const persona = {
    nombre: "Reinel",
    apellido: "Hernandez",
    edad: 17
}

// let a = persona.nombre;
// let b = persona.apellido;
// let c = persona.edad;

let {a,b,c} = persona;

console.log(a,b,c);
// const a = [1, "Letras", true, false, [1, "Letras"]];

// console.log(typeof a);
// console.log(a);
// console.log(a.length);
// const a = [1, "Letras", true, false, [1, "John"]];
// a.push("Gyovani");
// a.pop();

// console.log(a[4][1]);

const persona = {
    nombre: "Reinel",
    apellido: "Hernandez",
    edad: "17",
    saludar: function() {
        return `Hola soy ${this.nombre}`;
    }
}
persona.pais = "colombia";
persona.Genero = "Masculino";
persona.despidir = function() {
    return `chao se despide ${this.nombre}`;
}
// console.log(persona.saludar());
// console.log(persona.despidir());

// // console.log(Object.keys(persona).indexOf("nombbre"));
// if (Object.keys(persona).indexOf("Genero") === -1) {
//     console.log("El atributo no fue definido");
// }

console.log(Object.keys(persona).includes("pais"));
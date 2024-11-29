class Persona {
    constructor(nombreA, apellidoA, edadA) {
        this.nombre = nombreA;
        this.apellido = apellidoA;
        this.edad = edadA;
    }
    //Metodos
    comer() {
        console.log(`${this.nombre} esta comiendo empanada`);
        
    }
}

class Aprendiz extends Persona{
    
}

const saray = new Aprendiz("saray", "Eatupiñan", 20)
const kevin = new Aprendiz("kevin", "Paez", 19)

saray.comer();
kevin.comer();
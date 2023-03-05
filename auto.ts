// Usando la clase auto: Implementar la clase RegistroAutomotor con metodos para consultar por un auto en un listado,
// borrar, actualizar y dar de alta. 
// Partir de la funcion ya implementada para leer archivos. 

export class Auto {
   private marca : string;
   private modelo : string;
   private anio : number;
   private motor : number;
   private origen : string;

    constructor (marca : string, modelo : string, anio : number, motor : number, origen : string){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.motor = motor; 
        this.origen = origen;
    }
}
    export class RegistroAutomotor {
        todo(array){
            console.log('Autos: ', array);
    }

      consultar(modelo: string, array: Auto[]){
          let autoEncontrado = array.find(auto => modelo === modelo )
          if(autoEncontrado){
            console.log(modelo, ' Esta en el registro', autoEncontrado)
            return autoEncontrado
          } else{
            console.log(modelo, ' No esta en el registro');
            
          }

    }
      borrar(modelo: string,array: Auto []): any{
        let autoEncontrado = array.findIndex(auto => modelo == modelo);
            if(autoEncontrado >= 0){  
                array.splice(autoEncontrado, 1)
                console.log('Auto borrado', modelo);
                console.log(array);
                return array;
            } else {
    
             console.log('Auto ', modelo, 'no se borro');
            }

      }
      
      actualizar(modelo: string, array: Auto[], dato: string){
        let autoModificar = this.consultar(modelo, array)
        if(autoModificar){
            modelo = dato;
            console.log(' El modelo del auto se actualizo, ahora su modelo es ', dato);
        }
        else {
            console.log('El modelo del auto no se actualizo');
            
        }
        
    }

      leerAutos() {
        const fs = require ('fs')

        const datos = fs.readFileSync('./autos.json', "utf8");
        const autos = JSON.parse(datos)
        
        console.log(autos);
        
       
    }
    darDeAlta(modelo: Auto, array:Auto[]){
        if(array.push(auto)){
            console.log('Se dio de alta ', modelo, ' al listado', array);
        } else{
            console.log('El auto', modelo, ' No se ha podido dar de alta');
            
        }
    }



}

const auto = new Auto('Ford', 'Fiesta', 2018, 1500, 'Nacional');
const auto1 = new Auto('Honda', 'Fit', 2019, 1500, 'Nacional');
const registro = new RegistroAutomotor;
const auto2 = new Auto('Chevrolet', 'Tracker', 2020, 2000, 'Nacional');
const listado = [auto, auto1,auto2]
// registro.consultar('auto','auto1', listado)
// registro.todo(listado)
// registro.leerAutos()
// registro.borrar('Fiesta', listado)
// registro.actualizar('Fiesta', listado, 'Mondeo')
registro.darDeAlta('Tracker',listado)
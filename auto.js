"use strict";
// Usando la clase auto: Implementar la clase RegistroAutomotor con metodos para consultar por un auto en un listado,
// borrar, actualizar y dar de alta. 
// Partir de la funcion ya implementada para leer archivos. 
exports.__esModule = true;
exports.RegistroAutomotor = exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, anio, motor, origen) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.motor = motor;
        this.origen = origen;
    }
    return Auto;
}());
exports.Auto = Auto;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
    }
    RegistroAutomotor.prototype.todo = function (array) {
        console.log('Autos: ', array);
    };
    RegistroAutomotor.prototype.consultar = function (modelo, array) {
        var autoEncontrado = array.find(function (auto) { return modelo === modelo; });
        if (autoEncontrado) {
            console.log(modelo, ' Esta en el registro', autoEncontrado);
            return autoEncontrado;
        }
        else {
            console.log(modelo, ' No esta en el registro');
        }
    };
    RegistroAutomotor.prototype.borrar = function (modelo, array) {
        var autoEncontrado = array.findIndex(function (auto) { return modelo == modelo; });
        if (autoEncontrado >= 0) {
            array.splice(autoEncontrado, 1);
            console.log('Auto borrado', modelo);
            console.log(array);
            return array;
        }
        else {
            console.log('Auto ', modelo, 'no se borro');
        }
    };
    RegistroAutomotor.prototype.actualizar = function (modelo, array, dato) {
        var autoModificar = this.consultar(modelo, array);
        if (autoModificar) {
            modelo = dato;
            console.log(' El modelo del auto se actualizo, ahora su modelo es ', dato);
        }
        else {
            console.log('El modelo del auto no se actualizo');
        }
    };
    RegistroAutomotor.prototype.leerAutos = function () {
        var fs = require('fs');
        var datos = fs.readFileSync('./autos.json', "utf8");
        var autos = JSON.parse(datos);
        console.log(autos);
    };
    RegistroAutomotor.prototype.darDeAlta = function (modelo, array) {
        if (array.push(auto)) {
            console.log('Se dio de alta ', modelo, ' al listado', array);
        }
        else {
            console.log('El auto', modelo, ' No se ha podido dar de alta');
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
var auto = new Auto('Ford', 'Fiesta', 2018, 1500, 'Nacional');
var auto1 = new Auto('Honda', 'Fit', 2019, 1500, 'Nacional');
var registro = new RegistroAutomotor;
var auto2 = new Auto('Chevrolet', 'Tracker', 2020, 2000, 'Nacional');
var listado = [auto, auto1, auto2];
// registro.consultar('auto','auto1', listado)
// registro.todo(listado)
// registro.leerAutos()
// registro.borrar('Fiesta', listado)
// registro.actualizar('Fiesta', listado, 'Mondeo')
registro.darDeAlta('Tracker', listado);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuenta = void 0;
var Cuenta = /** @class */ (function () {
    function Cuenta(titular, cantidad) {
        this.titular = titular;
        this.cantidad = cantidad;
    }
    Cuenta.prototype.mostrar = function () {
        console.log("Hola " + this.titular.getName + " tiene en la cuenta " + this.cantidad + " pesos.");
    };
    Cuenta.prototype.ingregar = function (cantidad) {
        if (this.cantidad) {
            if (cantidad >= 0) {
                this.cantidad += cantidad;
            }
        }
        return this.cantidad;
    };
    Cuenta.prototype.retirar = function (cantidad) {
        if (this.cantidad) {
            this.cantidad -= cantidad;
        }
        return this.cantidad;
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, dni) {
        this.name = name;
        this.age = age;
        this.dni = dni;
    }
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setAge", {
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getDni", {
        get: function () {
            return this.dni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setDni", {
        set: function (dni) {
            this.dni = dni;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.mostrar = function () {
        console.log("La persona es " + this.name + " tiene " + this.age + " an:os y su DNI es " + this.dni + ".");
    };
    Person.prototype.esMayorDeEdad = function () {
        return this.age >= 18;
    };
    return Person;
}());
exports.Person = Person;

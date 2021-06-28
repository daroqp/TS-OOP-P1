
export class Person {
    
    constructor(private name: string, private age: number, private dni: number){}

    get getName():string {
        return this.name;
    }
    set setName(name:string) {
        this.name = name;
    }
    
    get getAge():number {
        return this.age;
    }
    set setAge(age:number) {
        this.age = age;
    }

    get getDni():number {
        return this.dni;
    }
    set setDni(dni:number) {
        this.dni = dni;
    }

    mostrar(){
        console.log(`La persona es ${this.name} tiene ${this.age} an:os y su DNI es ${this.dni}.`);
    }

    esMayorDeEdad():boolean {
        return this.age >= 18;
    }
}